import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Product } from "src/products/product.entity";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'ynamly_db',
    entities: [Product],
    synchronize: true,
};