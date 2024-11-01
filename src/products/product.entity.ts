import { IsNotEmpty } from "class-validator";
import { OrderItem } from "src/order-item/orderItem.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product extends BaseEntity {
    
    @PrimaryGeneratedColumn({
        comment: 'the product unique ID'
    })
    id: number;

    @Column({
        type: "varchar",
        length: 255,
        comment: 'Product name'
    })
    @IsNotEmpty()
    name: string;

    @Column({
        type: "text",
        comment: 'Product description'
    })
    @IsNotEmpty()
    description: string;

    @Column({
        type: "float", 
        comment: 'Product price'
    })
    @IsNotEmpty()
    price: number;

    @Column({
        type: "varchar", 
        length: 500,
        comment: 'Product image URL or path',
        nullable:true
    })
    @IsNotEmpty()
    imageUrl: string; 
/* 
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
    orderItems: OrderItem[];  */
}