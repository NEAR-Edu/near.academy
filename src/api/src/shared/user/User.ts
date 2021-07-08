// prettier-ignore
import { IsBoolean, IsDate, IsEmail, IsNumber, Min, IsMongoId, IsOptional, Length, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'
import { Referral } from '../../shared/referral/Referral'

export class User {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, unique: true, index: true })
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Property()
  @Length(3, 40)
  @Matches(/^[a-zA-Z0-9_]*.(testnet|near)$/, { message: 'Account name can only contain letters, numbers and underscores and needs to end with .testnet' })
  accountName?: string

  @Property()
  @Length(2, 40)
  name!: string

  @Property({ required: true, unique: true, index: true })
  @IsEmail()
  email!: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsBoolean()
  emailVerified?: boolean

  @Property({ required: true })
  hashedPassword!: string

  @Property({ nullable: true, optional: true })
  progress?: string[]

  @Property({ nullable: true, optional: true })
  @IsOptional()
  // provide a match decorator
  referral?: Referral[]

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date

  @Property()
  @IsNumber()
  @Min(6)
  tokenId?: number


}

export const UserModel = getModel(User, { schemaOptions: { timestamps: true } })
