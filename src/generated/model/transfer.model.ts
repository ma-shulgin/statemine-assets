import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "../marshal"
import {Asset} from "./asset.model"
import {TransferType} from "./transferType"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Index_()
  @Column_("text", {nullable: true})
  to!: string | undefined | null

  @Index_()
  @Column_("text", {nullable: true})
  from!: string | undefined | null

  @Column_("text", {nullable: true})
  delegator!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  fee!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => Asset, {nullable: true})
  asset!: Asset | undefined | null

  @Index_()
  @Column_("varchar", {length: 9, nullable: false})
  type!: TransferType

  @Index_()
  @Column_("text", {nullable: true})
  extrinisicId!: string | undefined | null

  @Index_()
  @Column_("bool", {nullable: false})
  success!: boolean

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Column_("text", {nullable: false})
  blockHash!: string

  @Index_()
  @Column_("integer", {nullable: false})
  blockNum!: number
}
