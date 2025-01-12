import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "../marshal"
import {UniqueClass} from "./uniqueClass.model"
import {UniqueInstance} from "./uniqueInstance.model"
import {TransferType} from "./transferType"

@Entity_()
export class UniqueTransfer {
  constructor(props?: Partial<UniqueTransfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

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
  @ManyToOne_(() => UniqueClass, {nullable: true})
  uniqueClass!: UniqueClass | undefined | null

  @Index_()
  @ManyToOne_(() => UniqueInstance, {nullable: true})
  uniqueInstance!: UniqueInstance | undefined | null

  @Index_()
  @Column_("varchar", {length: 9, nullable: false})
  type!: TransferType

  @Index_()
  @Column_("text", {nullable: true})
  extrinisicId!: string | undefined | null

  @Column_("bool", {nullable: false})
  success!: boolean
  
  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Index_()
  @Column_("text", {nullable: false})
  blockHash!: string

  @Index_()
  @Column_("integer", {nullable: false})
  blockNum!: number
}
