import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList : Order[] = []
  constructor(private orderService : OrderService) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrders();
  }

  openDetail(index : number){
    this.orderService.evento.emit(this.orderList[index]);
  }

}
