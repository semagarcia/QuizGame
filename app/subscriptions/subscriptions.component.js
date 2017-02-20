"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SubscriptionsComponent = (function () {
    function SubscriptionsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    SubscriptionsComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return SubscriptionsComponent;
}());
SubscriptionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './subscriptions.component.html'
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], SubscriptionsComponent);
exports.SubscriptionsComponent = SubscriptionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQU0vRCxJQUFhLHNCQUFzQjtJQUUvQixnQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELHFDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLHNCQUFzQjtJQUpsQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDaEQsQ0FBQztxQ0FHd0MseUJBQWdCO0dBRjdDLHNCQUFzQixDQVFsQztBQVJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N1YnNjcmlwdGlvbnMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbnNDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbn0iXX0=