import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewOpportunitiesComponent } from './new-opportunities/new-oppotunities.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'new-opportunities', component: NewOpportunitiesComponent },
    { path: 'subscriptions', component: SubscriptionsComponent },
    { path: 'play-game/:rol', component: PlayGameComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }