import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column('json', { array: false })
    orderItems: { productId: number; qty: number }[];

    @ManyToOne(() => User, user => user.orders)
    user: User;
}
