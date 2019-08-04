import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customers',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  people: any[];

  constructor() { }
    
  ngOnInit() {
    
  }

}
