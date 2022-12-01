import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers : Customer[] = [
    {
      firstname: 'Mario',
      lastname: 'Rossi',
      phone: '32584816',
      email: 'mr@asd.it'
    },
    {
      firstname: 'Luigi',
      lastname: 'Verdi',
      phone: '36589574',
      email: 'lv@asd.it'
    }
  ]

  getCustomers(): Customer[]{
    return this.customers;
  }

  // Evento che invia il customer dalla lista al dettaglio
  evento : EventEmitter<Customer> = new EventEmitter<Customer>();
  
}
