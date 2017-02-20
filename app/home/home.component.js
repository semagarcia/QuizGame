"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.newOpportunities = function () {
        this.routerExtensions.navigate(['/new-opportunities'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    };
    HomeComponent.prototype.mySubscriptions = function () {
        this.routerExtensions.navigate(['/subscriptions'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    };
    HomeComponent.prototype.playNewGame = function () {
        var _this = this;
        dialogs.confirm({
            title: 'Type of game',
            message: 'Select the type of game: organizer or player',
            okButtonText: 'Organizer',
            cancelButtonText: 'Player',
            neutralButtonText: 'Cancel'
        }).then(function (result) {
            if (result !== undefined) {
                // result = true => organizer; result = false => player
                _this.routerExtensions.navigate(['/play-game', (result) ? 'organizer' : 'player'], {
                    transition: {
                        name: 'fade',
                        duration: 200,
                        curve: 'linear'
                    }
                });
            }
        });
    };
    HomeComponent.prototype.profile = function () {
        this.routerExtensions.navigate(['/profile'], {
            transition: {
                name: 'fade',
                duration: 200,
                curve: 'linear'
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUMvRCxvQ0FBdUM7QUFNdkMsSUFBYSxhQUFhO0lBRXRCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0Qsd0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDbkQsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUFBLGlCQW1CQztRQWxCRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLDhDQUE4QztZQUN2RCxZQUFZLEVBQUUsV0FBVztZQUN6QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGlCQUFpQixFQUFFLFFBQVE7U0FDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDcEIsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLHVEQUF1RDtnQkFDdkQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsRUFBRTtvQkFDOUUsVUFBVSxFQUFFO3dCQUNSLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3dCQUNiLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBR3dDLHlCQUFnQjtHQUY3QyxhQUFhLENBc0R6QjtBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBuZXdPcHBvcnR1bml0aWVzKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbmV3LW9wcG9ydHVuaXRpZXMnXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmYWRlJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBteVN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9zdWJzY3JpcHRpb25zJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmFkZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxheU5ld0dhbWUoKSB7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogJ1R5cGUgb2YgZ2FtZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2VsZWN0IHRoZSB0eXBlIG9mIGdhbWU6IG9yZ2FuaXplciBvciBwbGF5ZXInLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT3JnYW5pemVyJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdQbGF5ZXInLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0ICE9PSB1bmRlZmluZWQpIHsgLy8gdW5kZWZpbmVkIC0+IGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIC8vIHJlc3VsdCA9IHRydWUgPT4gb3JnYW5pemVyOyByZXN1bHQgPSBmYWxzZSA9PiBwbGF5ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcGxheS1nYW1lJywgKHJlc3VsdCkgPyAnb3JnYW5pemVyJyA6ICdwbGF5ZXInXSwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmFkZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Byb2ZpbGUnXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmYWRlJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=