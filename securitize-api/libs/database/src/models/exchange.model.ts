import {
  Model,
  Column,
  Table,
  Index,
  PrimaryKey,
  AutoIncrement,
  DataType,
  DefaultScope,
} from 'sequelize-typescript';
import { IexchangeRate } from '../definitions';

@DefaultScope(() => ({
  raw: true,
}))
@Table({
  tableName: 'exchange-rate',
  timestamps: false,
})
export class Exchange extends Model implements IexchangeRate {
  @PrimaryKey
  @AutoIncrement
  @Index
  @Column({
    type: DataType.INTEGER,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  currency: string;
  @Column({
    type: DataType.FLOAT,
  })
  rate: number;
}
