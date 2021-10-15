import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { ProductDao } from './dao/product.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './model/product.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'ziirobot',
      entities: [ProductModel],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductModel]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductDao],
})
export class AppModule {}
