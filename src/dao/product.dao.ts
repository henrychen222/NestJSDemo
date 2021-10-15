import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductModel } from '../model/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDao {
  constructor(
    @InjectRepository(ProductModel)
    private productRepo: Repository<ProductModel>,
  ) {
  }

  async getAllProducts(): Promise<ProductModel[]> {
    const products = await this.productRepo.query(
      'SELECT * FROM ziirobot.product;',
    );
    // const products = await this.productRepo.find();
    console.log(products);
    return products;
  }
}
