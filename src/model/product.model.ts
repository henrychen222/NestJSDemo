import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'product_title', nullable: true })
  title: string;

  @Column({ type: 'varchar', name: 'product_price', nullable: true })
  price: number;

  @Column({ type: 'varchar', name: 'product_inventory', nullable: true })
  inventory: number;

  @Column({ type: 'varchar', name: 'product_link', nullable: true })
  link: string;

  @Column({ type: 'varchar', name: 'product_picture', nullable: true })
  picture: string;
}
