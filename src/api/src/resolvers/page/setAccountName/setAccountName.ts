import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { toPublicUser } from '../../../helpers/toPublicUser'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { SetAccountNameInputs, SetAccountNameOutputs } from '../../../shared/page/SetAccountName'
import { PublicUser } from '../../../shared/user/PublicUser'
import { User, UserModel } from '../../../shared/user/User'
import { issueNftCertificate } from '../../near/issueNft'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../../user/helpers/authenticate'

// export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified progress createdAt'

export const setAccountName = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.request.body)
  const setAccountNameArgs = plainToClass(SetAccountNameInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(setAccountNameArgs, { forbidUnknownValues: true }).catch(firstError)
  const { accountName } = setAccountNameArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  const accountNameRegEx = /^[a-zA-Z0-9_]*.(testnet|near)$/
  console.log(accountName, accountNameRegEx.test(accountName), accountNameRegEx.test('foxtnettestnet'))
  if (!accountNameRegEx.test(accountName)) throw new ResponseError(404, 'Invalid account name')

  const count = await UserModel.countDocuments({ tokenId: { $exists: true } }).exec()
  const offset = 400
  const tokenId = count + offset

  await issueNftCertificate(user.username, tokenId, accountName)

  const updatedUser: User = (await UserModel.updateOne(
    { _id: user._id },
    { $set: { tokenId: count + offset, accountName } },
  ).exec()) as User

  const publicUser: PublicUser = toPublicUser(updatedUser)

  const response: SetAccountNameOutputs = { user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
