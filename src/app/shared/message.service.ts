import { Injectable } from '@angular/core';
import {Message} from './message';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {

  API_URL = 'http://microblog-api.herokuapp.com/api/messages';

  constructor(private http: Http) { }

  getMessages(): Array<Message> {
    return [new Message('FLM', 'yeah')];
  }


  createMessage(message: Message): Observable<any> {
    return this.http.post(this.API_URL, message);
  }
}
