import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';

var WS = require('nativescript-websockets');            

@Component({
    moduleId: module.id,
    templateUrl: './play-game.component.html'
})
export class PlayGameComponent implements OnInit {
    private rol: string;
    private mySocket;

    constructor(private pageRoute: PageRoute, private routerExtensions: RouterExtensions) { 
        this.mySocket = new WS("ws://192.168.12.73:3000", {
            //protocols: ['chat', 'video'], 
            protocols: ['websocket'],
            timeout: 0, // 0 disabled, 10000 android, 60000 ios 
            allowCellular: true, 
            //headers: { 'Authorization': 'Basic ...' }
        });

        //this.mySocket = new WebSocket("ws://192.168.12.73:3000/", ['websocket']);
    }

    ngOnInit() {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => { this.rol = params['rol']; });
        
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
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

}