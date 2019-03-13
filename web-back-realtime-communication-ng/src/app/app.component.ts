import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'web-back-realtime-communication-ng';

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            console.log('Response from websocket: ' + msg);
        });
    }

    private message = {
        author: 'tutorialedge',
        message: 'this is a test message',
    };

    sendMsg() {
        console.log('new message from client to websocket: ', this.message);
        this.chatService.messages.next(this.message);
        this.message.message = '';
    }
}
