import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', nullable: false })
  description!: string;

  @Column({ type: 'float', nullable: false })
  value!: number;

  @Column({ type: 'varchar', nullable: false })
  image!: string;

  @Column({ type: 'boolean', nullable: false })
  disponibility!: boolean;

  @Column({ type: 'varchar', nullable: false })
  personCount!: number;

  @Column({ type: 'boolean', nullable: true })
  celiacSafe!: boolean;

  @Column({ type: 'boolean', nullable: true })
  vegan!: boolean;

  @Column({ type: 'boolean', nullable: true })
  vegetarian!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category!: CategoryEntity;
}
