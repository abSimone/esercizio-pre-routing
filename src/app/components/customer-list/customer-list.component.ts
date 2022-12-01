import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList : Customer[] = []
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.customerList = this.customerService.getCustomers();
  }

  openDetail(index : number){
    this.customerService.evento.emit(this.customerList[index]);
  }

}
