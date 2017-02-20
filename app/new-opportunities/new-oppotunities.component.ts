import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './new-opportunities.component.html'
})
export class NewOpportunitiesComponent implements OnInit {
    private filterCriteria;
    private opportunities = [];

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() {
        this.filterCriteria = { text: '' };
        this.opportunities = [
            { id: '1', name: 'A' },
            { id: '2', name: 'B' },
            { id: '3', name: 'C' },
            { id: '4', name: 'D' },
            { id: '5', name: 'E' }
        ];
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

    clearSearchField() {
        this.filterCriteria.text = '';
    }

}