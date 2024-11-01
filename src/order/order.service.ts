import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { OrderItem } from 'src/order-item/orderItem.entity';
import { OrderItemRepository } from 'src/order-item/orderItem.repository';


@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private readonly orderRepository: OrderRepository,
                @InjectRepository(User) private readonly userRepository: UserRepository,
            @InjectRepository(OrderItem) private readonly orderItemRepository: OrderItemRepository){}

    async createOrder(orderDto: OrderDto): Promise<Order> {
        const user  = await this.userRepository.findOneBy({id:orderDto.userId})
        if(!user){
            throw new Error('user not found')
        }

        const newOrder = this.orderRepository.create({
            user:user,
            totalAmount: orderDto.totalAmount,
        })

        const orderItems = await Promise.all(
            orderDto.orderItems.map(async (item) => {
              const orderItem = this.orderItemRepository.create({
                product: item, 
                quantity: item.quantity,
                price: item.price,
                order: newOrder, 
              });
              return this.orderItemRepository.save(orderItem);
            }),
          );

          newOrder.orderItems = orderItems;

        return this.orderRepository.save(newOrder);
      }
}