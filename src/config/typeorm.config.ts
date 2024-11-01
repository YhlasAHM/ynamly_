import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { OrderItem } from "src/order-item/orderItem.entity";
import { Order } from "src/order/order.entity";
import { Product } from "src/products/product.entity";
import { User } from "src/user/user.entity";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'ynamly_db',
    entities: [Product,User,Order,OrderItem],
    synchronize: true,
};