import { ObjectId } from 'mongodb'

import { DayJs } from '../../../helpers/dayjs';

import { ResponseError } from '../../../shared/mongo/ResponseError'
import { QuotaModel, Quota } from '../../../shared/quota/Quota'
import { TEST } from '../../../constants'
import { QuotaType } from '../../../shared/quota/QuotaType'
import { QuotaRates } from '../../../shared/quota/QuotaRates'

interface RateLimit {
  (userId: ObjectId, quotaType?: QuotaType): Promise<void>
}

interface IUpdateFields {
  count?: number,
  expiresAt?: Date,
  $inc?: {
    count: number,
  }
}

export const rateLimit: RateLimit = async (userId, quotaType = QuotaType.DEFAULT_LIMIT) => {
  if (process.env.NODE_ENV === TEST) return

  let fields;
  let limitBefore: Quota | null = null;

  const quota = await QuotaModel.findOne({ userId, quotaType });

  const updateQuota = async (updateFields: IUpdateFields) => {
    const newQuota = await QuotaModel.findOneAndUpdate(
      { userId, quotaType },
      updateFields,
      { upsert: true, setDefaultsOnInsert: true, new: true },
    ).exec()

    return newQuota;
  }

  if (quota && DayJs().isAfter(quota.expiresAt)) {
    fields = {
      count: 1,
      expiresAt: DayJs(quota.expiresAt).add(1, 'day').toDate(),
    }

    limitBefore = await updateQuota(fields)

  } else {

    fields = {
      $inc: { count: 1 },
    }
    limitBefore = await updateQuota(fields)
  }

  if (limitBefore && limitBefore.count && limitBefore.count > QuotaRates[quotaType])
    throw new ResponseError(429, 'Quota limit reached. Please wait 24h and retry.')
}
