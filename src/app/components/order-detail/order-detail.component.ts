import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  o! : Order;

  ngOnInit() {
    this.orderService.evento.subscribe((order: Order) => {
      console.log(order);
      
      this.o = order;
    });
  }
}
