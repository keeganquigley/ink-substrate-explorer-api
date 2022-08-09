import { Field, Int, ObjectType } from '@nestjs/graphql'
import { GenericExtrinsicEra } from '@polkadot/types'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Transaction hash' })
  hash!: string

  @Column()
  @Field(() => String)
  blockHash!: string

  @Column()
  @Field(() => String)
  method!: string

  @Column()
  @Field(() => String)
  section!: string

  @Column()
  @Field(() => String, { description: 'Signature generated by the signer' })
  signature?: string

  @Column()
  @Field(() => String, { description: 'Address of the signer', nullable: true })
  signer?: string

  @Column('int')
  @Field(() => Int, { description: "Transaction's nonce", nullable: true })
  nonce?: number

  @Column('int')
  @Field(() => Int, { description: 'Extra gas paid for the Tx as tip', nullable: true })
  tip?: number

  // TODO: add this
  era?: GenericExtrinsicEra
  // We are not storing this for now
  args: any
}
