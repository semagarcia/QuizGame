"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var WS = require('nativescript-websockets');
var PlayGameComponent = (function () {
    function PlayGameComponent(pageRoute, routerExtensions) {
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.mySocket = new WS("ws://192.168.12.73:3000", {
            //protocols: ['chat', 'video'], 
            protocols: ['websocket'],
            timeout: 0,
            allowCellular: true,
        });
        //this.mySocket = new WebSocket("ws://192.168.12.73:3000/", ['websocket']);
    }
    PlayGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.rol = params['rol']; });
        this.mySocket.open();
        /*this.mySocket.on('open', function(socket) { console.log("Hey I'm open"); this.mySocket.send("Hello"); });
        this.mySocket.on('message', function(socket, message) { console.log("Got a message", message); });
        this.mySocket.on('close', function(socket, code, reason) { console.log("Socket was closed because: ", reason, " code: ", code); });
        this.mySocket.on('error', function(socket, error) { console.log("Socket had an error", error);});

        this.mySocket.addEventListener('open', function (evt) { console.log("We are Open"); evt.target.send("Hello"); });
        this.mySocket.addEventListener('message', function(evt) { console.log("We got a message: ", evt.data); evt.target.close(); });
        this.mySocket.addEventListener('close', function(evt) { console.log("The Socket was Closed:", evt.code, evt.reason); });
        this.mySocket.addEventListener('error', function(evt) { console.log("The socket had an error", evt.error); });*/
        console.log('>> open? ' + this.mySocket.isOpen());
        console.log('>> url? ' + this.mySocket.url);
        console.log('>> protocol? ' + this.mySocket.protocol);
        console.log('>> state? ' + this.mySocket.readyState);
        console.log('>> android? ' + this.mySocket.android);
        console.log('>> ios? ' + this.mySocket.ios);
        this.mySocket.send('msg');
        this.mySocket.send('9');
    };
    PlayGameComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return PlayGameComponent;
}());
PlayGameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './play-game.component.html'
    }),
    __metadata("design:paramtypes", [router_1.PageRoute, router_2.RouterExtensions])
], PlayGameComponent);
exports.PlayGameComponent = PlayGameComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS1nYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXktZ2FtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzREFBd0Q7QUFDeEQsc0RBQStEO0FBQy9ELHVDQUFxQztBQUVyQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQU01QyxJQUFhLGlCQUFpQjtJQUkxQiwyQkFBb0IsU0FBb0IsRUFBVSxnQkFBa0M7UUFBaEUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDaEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtZQUM5QyxnQ0FBZ0M7WUFDaEMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsYUFBYSxFQUFFLElBQUk7U0FFdEIsQ0FBQyxDQUFDO1FBRUgsMkVBQTJFO0lBQy9FLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBMEJDO1FBekJHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckI7Ozs7Ozs7O3dIQVFnSDtRQUVoSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSxpQkFBaUI7SUFKN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO0tBQzVDLENBQUM7cUNBS2lDLGtCQUFTLEVBQTRCLHlCQUFnQjtHQUozRSxpQkFBaUIsQ0FnRDdCO0FBaERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbnZhciBXUyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13ZWJzb2NrZXRzJyk7ICAgICAgICAgICAgXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BsYXktZ2FtZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGxheUdhbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgcm9sOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBteVNvY2tldDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICAgICAgdGhpcy5teVNvY2tldCA9IG5ldyBXUyhcIndzOi8vMTkyLjE2OC4xMi43MzozMDAwXCIsIHtcbiAgICAgICAgICAgIC8vcHJvdG9jb2xzOiBbJ2NoYXQnLCAndmlkZW8nXSwgXG4gICAgICAgICAgICBwcm90b2NvbHM6IFsnd2Vic29ja2V0J10sXG4gICAgICAgICAgICB0aW1lb3V0OiAwLCAvLyAwIGRpc2FibGVkLCAxMDAwMCBhbmRyb2lkLCA2MDAwMCBpb3MgXG4gICAgICAgICAgICBhbGxvd0NlbGx1bGFyOiB0cnVlLCBcbiAgICAgICAgICAgIC8vaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAuLi4nIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy90aGlzLm15U29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTkyLjE2OC4xMi43MzozMDAwL1wiLCBbJ3dlYnNvY2tldCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLnJvbCA9IHBhcmFtc1sncm9sJ107IH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5teVNvY2tldC5vcGVuKCk7XG4gICAgICAgIFxuICAgICAgICAvKnRoaXMubXlTb2NrZXQub24oJ29wZW4nLCBmdW5jdGlvbihzb2NrZXQpIHsgY29uc29sZS5sb2coXCJIZXkgSSdtIG9wZW5cIik7IHRoaXMubXlTb2NrZXQuc2VuZChcIkhlbGxvXCIpOyB9KTtcbiAgICAgICAgdGhpcy5teVNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKHNvY2tldCwgbWVzc2FnZSkgeyBjb25zb2xlLmxvZyhcIkdvdCBhIG1lc3NhZ2VcIiwgbWVzc2FnZSk7IH0pO1xuICAgICAgICB0aGlzLm15U29ja2V0Lm9uKCdjbG9zZScsIGZ1bmN0aW9uKHNvY2tldCwgY29kZSwgcmVhc29uKSB7IGNvbnNvbGUubG9nKFwiU29ja2V0IHdhcyBjbG9zZWQgYmVjYXVzZTogXCIsIHJlYXNvbiwgXCIgY29kZTogXCIsIGNvZGUpOyB9KTtcbiAgICAgICAgdGhpcy5teVNvY2tldC5vbignZXJyb3InLCBmdW5jdGlvbihzb2NrZXQsIGVycm9yKSB7IGNvbnNvbGUubG9nKFwiU29ja2V0IGhhZCBhbiBlcnJvclwiLCBlcnJvcik7fSk7IFxuXG4gICAgICAgIHRoaXMubXlTb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIGZ1bmN0aW9uIChldnQpIHsgY29uc29sZS5sb2coXCJXZSBhcmUgT3BlblwiKTsgZXZ0LnRhcmdldC5zZW5kKFwiSGVsbG9cIik7IH0pO1xuICAgICAgICB0aGlzLm15U29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihldnQpIHsgY29uc29sZS5sb2coXCJXZSBnb3QgYSBtZXNzYWdlOiBcIiwgZXZ0LmRhdGEpOyBldnQudGFyZ2V0LmNsb3NlKCk7IH0pO1xuICAgICAgICB0aGlzLm15U29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgZnVuY3Rpb24oZXZ0KSB7IGNvbnNvbGUubG9nKFwiVGhlIFNvY2tldCB3YXMgQ2xvc2VkOlwiLCBldnQuY29kZSwgZXZ0LnJlYXNvbik7IH0pO1xuICAgICAgICB0aGlzLm15U29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZXZ0KSB7IGNvbnNvbGUubG9nKFwiVGhlIHNvY2tldCBoYWQgYW4gZXJyb3JcIiwgZXZ0LmVycm9yKTsgfSk7Ki9cblxuICAgICAgICBjb25zb2xlLmxvZygnPj4gb3Blbj8gJyArIHRoaXMubXlTb2NrZXQuaXNPcGVuKCkpO1xuICAgICAgICBjb25zb2xlLmxvZygnPj4gdXJsPyAnICsgdGhpcy5teVNvY2tldC51cmwpO1xuICAgICAgICBjb25zb2xlLmxvZygnPj4gcHJvdG9jb2w/ICcgKyB0aGlzLm15U29ja2V0LnByb3RvY29sKTtcbiAgICAgICAgY29uc29sZS5sb2coJz4+IHN0YXRlPyAnICsgdGhpcy5teVNvY2tldC5yZWFkeVN0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coJz4+IGFuZHJvaWQ/ICcgKyB0aGlzLm15U29ja2V0LmFuZHJvaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnPj4gaW9zPyAnICsgdGhpcy5teVNvY2tldC5pb3MpO1xuXG4gICAgICAgIHRoaXMubXlTb2NrZXQuc2VuZCgnbXNnJyk7XG4gICAgICAgIHRoaXMubXlTb2NrZXQuc2VuZCgnOScpO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbn0iXX0=