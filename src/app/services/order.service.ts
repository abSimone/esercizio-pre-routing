import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [
    {
      orderNumber: '0',
      orderDate: '2020',
      status: 'finished',
    },
    {
      orderNumber: '1',
      orderDate: '2019',
      status: 'working',
    },
    {
      orderNumber: '2',
      orderDate: '2021',
      status: 'prospecting',
    },
    {
      orderNumber: '3',
      orderDate: '2022',
      status: 'delivering',
    },
  ];

  evento : EventEmitter<Order> = new EventEmitter<Order>();

  getOrders() : Order[] {
    return this.orders;
  }

}
