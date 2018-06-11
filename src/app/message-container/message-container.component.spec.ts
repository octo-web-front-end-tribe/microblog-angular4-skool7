import {async, TestBed} from '@angular/core/testing';

import {MessageContainerComponent} from './message-container.component';
import {MessageItemComponent} from './message-list/message-item/message-item.component';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from './shared/message.service';
import {HttpModule} from '@angular/http';

describe('MessageContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [
        MessageContainerComponent,
        MessageListComponent,
        MessageItemComponent,
        MessageInputComponent
      ],
      providers: [
        MessageService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MessageContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
