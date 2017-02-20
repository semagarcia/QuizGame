import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

}