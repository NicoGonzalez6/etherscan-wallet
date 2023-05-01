import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { formatEther } from 'ethers';
import { EtherscanService } from 'src/etherscan/services/etherscan.service';
import { Wallet } from '@wallets-api/models';
import { Iwallets } from '@wallets-api/definitions';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WalletServices {
  constructor(
    private etherscanServices: EtherscanService,
    @InjectModel(Wallet)
    private walletModel: typeof Wallet,
  ) {}

  async create(address: string, isFavorite = false): Promise<Iwallets> {
    const wallet = await this.walletModel.findOne({
      where: {
        address: address,
      },
    });

    if (wallet)
      throw new BadRequestException(
        `The next address already exists: ${address}`,
      );

    const daysPassedFromFirst =
      await this.etherscanServices.getFirstTransactionDateElapsed(address);

    const balanceInWei = await this.etherscanServices.getAccountBalanceInWei(
      address,
    );

    const accountInfo = await Promise.all([
      daysPassedFromFirst,
      balanceInWei,
    ]).then(([days, second]) => {
      return {
        isOld: days > 365,
        balanceInWeight: second.result,
        balanceInEth: formatEther(second.result),
      };
    });
    const newWallet = await this.walletModel.create({
      isFavorite: isFavorite,
      address,
      balance_in_weight: accountInfo.balanceInWeight,
      balance_in_eth: accountInfo.balanceInEth,
      isOld: accountInfo.isOld,
    });
    return newWallet.dataValues;
  }

  async getAll(orderBy: string): Promise<Iwallets[]> {
    let wallets = undefined;

    if (!orderBy) {
      orderBy = 'createdAt';
      wallets = await this.walletModel.findAll({
        order: [[orderBy, 'DESC']],
      });
    } else {
      wallets = await this.walletModel.findAll({
        order: [
          [orderBy, 'DESC'],
          ['createdAt', 'DESC'],
        ],
      });
    }

    return wallets;
  }

  async getSingle(id: number): Promise<Iwallets> {
    const wallet = await this.walletModel.findOne({
      where: {
        id: id,
      },
    });
    if (!wallet) throw new NotFoundException(`Not wallet found with id: ${id}`);

    return wallet;
  }

  async delete(id: number): Promise<boolean> {
    const wallet = await this.walletModel.findOne({
      where: {
        id: id,
      },
    });
    if (!wallet) throw new NotFoundException(`Not wallet found with id: ${id}`);
    await this.walletModel.destroy({
      where: {
        id: id,
      },
    });
    return true;
  }

  async toogleFavorite(id: number): Promise<Iwallets> {
    const wallet = await this.walletModel.findOne({
      where: {
        id: id,
      },
    });
    if (!wallet) throw new NotFoundException(`Not wallet found with id: ${id}`);

    const updatedWallet = await this.walletModel.update(
      {
        isFavorite: !wallet.isFavorite,
      },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
    return updatedWallet[1][0];
  }
}
