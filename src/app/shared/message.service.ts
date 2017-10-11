import { Injectable } from '@angular/core';
import {Message} from './message';

@Injectable()
export class MessageService {

  messages: Array<Message> = [];
  
  constructor() { }

  getMessages(): Array<Message> {
    return [new Message('FLM', 'yeah')];
  }

  createMessage(message: Message): void {
    this.messages.push(message);
  }
}
