import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from './shared/message.service';
import {HttpModule} from '@angular/http';
import {MessageContainerComponent} from './message-container/message-container.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageItemComponent} from './message-list/message-item/message-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        MessageContainerComponent,
        MessageInputComponent,
        MessageListComponent,
        MessageItemComponent
      ],
      providers: [
        MessageService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
