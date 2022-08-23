import { Field, ObjectType} from '@nestjs/graphql'
import { Transaction } from '../../transactions/entity/transaction.entity'
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Codec } from '@polkadot/types-codec/types'
import { IEventData } from '@polkadot/types/types'

@ObjectType()
@Entity({ name: 'events' })
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  contract?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  transactionHash?: string

  @Column()
  @Field(() => String)
  index!: string

  @Column()
  @Field(() => String)
  section!: string

  @Column()
  @Field(() => String)
  method!: string

  @Column()
  @Field(() => String)
  topics!: string

  @ManyToOne(() => Transaction, (transaction: Transaction) => transaction.events, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn()
  transaction!: Transaction

  @Column()
  @Field(() => String)
  data!: string

  @Column({ type: 'jsonb', nullable: true, default: {} })
  @Field(() => String,{ nullable: true })
  jsonData?: Codec[] & IEventData
}
