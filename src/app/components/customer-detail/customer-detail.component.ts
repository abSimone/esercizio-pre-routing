import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  c!: Customer;
  ngOnInit() {
    this.customerService.evento.subscribe((customer: Customer) => {
      this.c = customer;
    });
  }
}
