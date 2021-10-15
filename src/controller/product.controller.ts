import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('api')
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Get('/product')
  async getAllProductsView() {
    return await this.productService.getAllProductsView();
  }
}
