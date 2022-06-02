import { Request, Response } from 'express';
import { CreateProductDto } from '../dtos/product/create-product.dto';
import { CreatedProductDto } from '../dtos/product/created-product.dto';
import { UpdateProductDto } from '../dtos/product/update-product.dto';
import { ProductService } from '../services/product.service';
import { HttpStatus } from '../utils/enums/http-status.enum';

interface CreateProductBody extends Request {
  body: CreateProductDto;
}
interface UpdateProductBody extends Request {
  body: Partial<UpdateProductDto>;
}
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  async create(
    { body, file }: CreateProductBody,
    response: Response,
  ): Promise<Response<CreatedProductDto>> {
    const product = await this.productService.create({
      ...body,
      image: file!.filename,
    });
    return response.status(HttpStatus.CREATED).json(product);
  }

  async getAll(
    request: Request,
    response: Response,
  ): Promise<Response<CreatedProductDto>> {
    const { name, disponibility, celiacSafe, vegan, vegetarian } =
      request.query;

    const products = await this.productService.getAll();

    return response.status(HttpStatus.OK).json(products);
  }

  async show(
    { params }: Request,
    response: Response,
  ): Promise<Response<CreatedProductDto>> {
    const product = await this.productService.show(params.id);
    return response.status(HttpStatus.OK).json(product);
  }

  async update(
    { body, file, params }: UpdateProductBody,
    response: Response,
  ): Promise<Response<void>> {
    await this.productService.update(params.id, {
      ...body,
      image: file?.filename,
    });
    return response.status(HttpStatus.NO_CONTENT).json();
  }

  async delete(
    { params }: Request,
    response: Response,
  ): Promise<Response<void>> {
    await this.productService.delete(params.id);
    return response.status(HttpStatus.NO_CONTENT).json();
  }
}
