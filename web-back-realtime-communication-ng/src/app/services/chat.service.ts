import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {pipe, Subject} from 'rxjs';
import { WebsocketService } from './websocket.service';
import {map} from 'rxjs/operators';

const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
    author: string;
    message: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = wsService.connect(CHAT_URL).subscribe(
          pipe(map(response: MessageEvent): Message => {
              const data = JSON.parse(response.data);

              return {
                author: data.author,
                message: data.message,
              };
            }));



        // )
        //
        //   .map(
        //     (response: MessageEvent): Message => {
        //         const data = JSON.parse(response.data);
        //
        //         return {
        //             author: data.author,
        //             message: data.message,
        //         };
        //     }
        // );
    }
}
