import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MessageItemComponent} from './message-list/message-item/message-item.component';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from './shared/message.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent,
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
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
