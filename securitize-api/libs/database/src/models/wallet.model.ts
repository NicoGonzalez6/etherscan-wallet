import {
  Model,
  Column,
  Table,
  Index,
  PrimaryKey,
  AutoIncrement,
  DataType,
  DefaultScope,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Iwallets } from '../definitions';

@DefaultScope(() => ({
  raw: true,
}))
@Table({
  tableName: 'wallets',
  timestamps: true,
})
export class Wallet extends Model implements Iwallets {
  @PrimaryKey
  @AutoIncrement
  @Index
  @Column({
    type: DataType.INTEGER,
  })
  id: number;
  @Index
  @Column({
    type: DataType.STRING(42),
  })
  address: string;
  @Column({
    type: DataType.STRING,
  })
  balance_in_weight: string;
  @Column({
    type: DataType.STRING,
  })
  balance_in_eth: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  isFavorite: boolean;
  @Column({
    type: DataType.BOOLEAN,
  })
  isOld: boolean;

  @CreatedAt
  createdAt?: Date;
  @UpdatedAt
  updatedAt?: Date;
}
