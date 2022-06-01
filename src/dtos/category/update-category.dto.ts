import { body, ValidationChain } from 'express-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends CreateCategoryDto {
  static validators(): ValidationChain[] {
    return [body('name', 'Valor NAME não é uma string!').optional().isString()];
  }
}
