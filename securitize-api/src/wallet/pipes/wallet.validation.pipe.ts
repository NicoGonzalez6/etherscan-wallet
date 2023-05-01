import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateWalletDto } from '../dtos';

@Injectable()
export class WalletValidationPipe implements PipeTransform {
  transform(value: CreateWalletDto) {
    if (value.address.length != 42) {
      throw new BadRequestException('strings must have 42 characters');
    }
    return value;
  }
}
