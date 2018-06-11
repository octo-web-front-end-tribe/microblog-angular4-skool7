import {Component, OnInit} from '@angular/core';
import {Message} from '../shared/message';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Array<Message>;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

  addOneMessageIntoList() {
    return undefined;
  }
}
