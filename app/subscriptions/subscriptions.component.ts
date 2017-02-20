import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

}