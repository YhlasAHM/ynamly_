import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./products.service";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { ApiTags } from "@nestjs/swagger";

import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) { }

    @Get()
    async getProducts(): Promise<Product[]> {
        return this.productService.getProducts()
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id: number): Promise<void> {
        return await this.productService.deleteProduct_(id)
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                callback(null, `${randomName}${extname(file.originalname)}`);
            },
        }),
    }))
    async create(
        @Body() productData: CreateProductDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<Product> {
        const imageUrl = file ? `/uploads/${file.filename}` : null;
        return this.productService.createProduct({
            ...productData,
            imageUrl,
        });
    }
}