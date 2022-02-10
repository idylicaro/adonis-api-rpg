import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Group from 'App/Models/Group'

export default class GroupRequest extends BaseModel {
  public static table = 'groups_requests'

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id', serializeAs: 'userId' })
  public userId: number

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Group, {
    foreignKey: 'groupId',
  })
  public group: BelongsTo<typeof Group>

  @column()
  public status: string

  @column({ columnName: 'group_id', serializeAs: 'groupId' })
  public groupId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
