import { Component, OnInit } from '@Angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type='text' />
    `
})

export class FilterTextboxComponent implements OnInit {
    
    constructor() {};

    ngOnInit() {

    }
}