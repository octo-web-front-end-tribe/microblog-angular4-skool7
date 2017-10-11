import { Component, OnInit } from '@angular/core';
import {Message} from '../shared/message';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  textMessage: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.textMessage = '';
  }

  addMessage() {
    this.messageService.createMessage(new Message('me', this.textMessage));
    this.textMessage = '';
  }
}
