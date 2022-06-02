import { ProductEntity } from '../../entities/product.entity';
import { CreateProductDto } from './create-product.dto';

export class CreatedProductDto extends CreateProductDto {
  constructor({
    name,
    description,
    value,
    disponibility,
    image,
    id,
    personCount,
    category,
    celiacSafe,
    vegan,
    vegetarian,
  }: ProductEntity) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.personCount = personCount;
    this.disponibility =
      typeof disponibility === 'string' && disponibility === 'true'
        ? true
        : false;
    this.image = image;
    this.categoryId = category.id;
    this.celiacSafe = celiacSafe;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
  }
}
