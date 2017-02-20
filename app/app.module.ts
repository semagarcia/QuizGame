import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NewOpportunitiesComponent } from './new-opportunities/new-oppotunities.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NewOpportunitiesComponent,
        SubscriptionsComponent,
        PlayGameComponent,
        ProfileComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
