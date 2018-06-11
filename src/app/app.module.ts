import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MessageItemComponent} from './message-list/message-item/message-item.component';
import {MessageListComponent} from './message-list/message-list.component';
import {FormsModule} from '@angular/forms';
import {MessageInputComponent} from './message-input/message-input.component';
import {MessageService} from './shared/message.service';
import {HttpModule} from '@angular/http';
import {MessageContainerComponent} from './message-container/message-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageListComponent,
    MessageInputComponent,
    MessageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
