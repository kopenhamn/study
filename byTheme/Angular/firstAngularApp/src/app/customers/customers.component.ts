import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];
  constructor() { }
    
  ngOnInit() {
    this.title = 'CUSTOMERS';
    this.people = [
      {id: 1, name: 'Michael', city: 'Kyiv', orderTotal: 8.90, customerSince: new Date(2014, 7, 10)},
      {id: 2, name: 'Alex', city: 'Kyiv', orderTotal: 12.90, customerSince: new Date(2014, 4, 10)},
      {id: 3, name: 'Ivan', city: 'Odessa', orderTotal: 3.50, customerSince: new Date(2014, 7, 22)},
      {id: 4, name: 'John', city: 'Kyiv', orderTotal: 15.90, customerSince: new Date(2014, 3, 10)},
      {id: 5, name: 'Anna', city: 'Kyiv', orderTotal: 13.00, customerSince: new Date(2014, 12, 11)},
      {id: 6, name: 'Jessy', city: 'Lviv', orderTotal: 11.30, customerSince: new Date(2015, 4, 15)}
    ]
  }

}
