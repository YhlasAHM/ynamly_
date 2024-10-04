import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { ProductRepository } from "./product.repository";
import { CreateProductDto } from "./dto/create-product.dto";

import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class ProductService{
    constructor(@InjectRepository(Product) private readonly productRepository: ProductRepository ){}

    async getProducts(): Promise<Product[]>{
        return await this.productRepository.find()
    }

    async createProduct(productData: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create(productData); 
        return this.productRepository.save(product); 
      }

      async deleteProduct(id: number): Promise<void> {
        const product = await this.productRepository.findOne({where: {id}}); 
    
        if (product.imageUrl) {
          
          const filePath = join(__dirname, '..', '..', 'uploads', product.imageUrl.split('/').pop());
          
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error while deleting the file:', err);
            } else {
              console.log('File deleted successfully:', filePath);
            }
          });
        }
    
        await this.productRepository.delete(id);
      }
}