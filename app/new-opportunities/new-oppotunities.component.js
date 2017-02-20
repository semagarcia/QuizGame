"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var NewOpportunitiesComponent = (function () {
    function NewOpportunitiesComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.opportunities = [];
    }
    NewOpportunitiesComponent.prototype.ngOnInit = function () {
        this.filterCriteria = { text: '' };
        this.opportunities = [
            { id: '1', name: 'A' },
            { id: '2', name: 'B' },
            { id: '3', name: 'C' },
            { id: '4', name: 'D' },
            { id: '5', name: 'E' }
        ];
    };
    NewOpportunitiesComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    NewOpportunitiesComponent.prototype.clearSearchField = function () {
        this.filterCriteria.text = '';
    };
    return NewOpportunitiesComponent;
}());
NewOpportunitiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './new-opportunities.component.html'
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], NewOpportunitiesComponent);
exports.NewOpportunitiesComponent = NewOpportunitiesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LW9wcG90dW5pdGllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXctb3Bwb3R1bml0aWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQU0vRCxJQUFhLHlCQUF5QjtJQUlsQyxtQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGOUMsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFFK0IsQ0FBQztJQUUzRCw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2pCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1NBQ3pCLENBQUM7SUFDTixDQUFDO0lBRUQsd0NBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxvREFBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVMLGdDQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSx5QkFBeUI7SUFKckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsb0NBQW9DO0tBQ3BELENBQUM7cUNBS3dDLHlCQUFnQjtHQUo3Qyx5QkFBeUIsQ0F5QnJDO0FBekJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmV3LW9wcG9ydHVuaXRpZXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5ld09wcG9ydHVuaXRpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmlsdGVyQ3JpdGVyaWE7XG4gICAgcHJpdmF0ZSBvcHBvcnR1bml0aWVzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSB7IHRleHQ6ICcnIH07XG4gICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcyA9IFtcbiAgICAgICAgICAgIHsgaWQ6ICcxJywgbmFtZTogJ0EnIH0sXG4gICAgICAgICAgICB7IGlkOiAnMicsIG5hbWU6ICdCJyB9LFxuICAgICAgICAgICAgeyBpZDogJzMnLCBuYW1lOiAnQycgfSxcbiAgICAgICAgICAgIHsgaWQ6ICc0JywgbmFtZTogJ0QnIH0sXG4gICAgICAgICAgICB7IGlkOiAnNScsIG5hbWU6ICdFJyB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoRmllbGQoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEudGV4dCA9ICcnO1xuICAgIH1cblxufSJdfQ==