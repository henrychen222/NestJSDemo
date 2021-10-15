import { Injectable } from '@nestjs/common';
import { ProductDao } from '../dao/product.dao';

@Injectable()
export class ProductService {
  constructor(private readonly productDao: ProductDao) {

  }

  async getAllProductsView() {
    return await this.productDao.getAllProducts();
  }
}
