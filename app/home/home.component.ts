import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    newOpportunities() {
        this.routerExtensions.navigate(['/new-opportunities'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    }

    mySubscriptions() {
        this.routerExtensions.navigate(['/subscriptions'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    }

    playNewGame() {
        dialogs.confirm({
            title: 'Type of game',
            message: 'Select the type of game: organizer or player',
            okButtonText: 'Organizer',
            cancelButtonText: 'Player',
            neutralButtonText: 'Cancel'
        }).then((result: boolean) => {
            if(result !== undefined) { // undefined -> cancelled
                // result = true => organizer; result = false => player
                this.routerExtensions.navigate(['/play-game', (result) ? 'organizer' : 'player'], {
                    transition: {
                        name: 'fade',
                        duration: 200,
                        curve: 'linear'
                    }
                });
            }
        });
    }

    profile() {
        this.routerExtensions.navigate(['/profile'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    }
}
