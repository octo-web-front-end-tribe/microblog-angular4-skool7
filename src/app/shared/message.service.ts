import { Injectable } from '@angular/core';
import {Message} from './message';

@Injectable()
export class MessageService {

  constructor() { }

  getMessages() {
    return [new Message('FLM', 'yeah')];
  }
}
