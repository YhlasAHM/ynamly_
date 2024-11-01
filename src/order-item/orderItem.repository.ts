import { EntityRepository, Repository } from "typeorm";
import { OrderItem } from "./orderItem.entity";

@EntityRepository(OrderItem)
export class OrderItemRepository extends Repository<OrderItem> { } 