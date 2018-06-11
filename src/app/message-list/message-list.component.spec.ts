import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageListComponent} from './message-list.component';
import {MessageItemComponent} from './message-item/message-item.component';
import {MessageService} from '../shared/message.service';
import {Message} from '../shared/message';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('MessageListComponent', () => {
    let component: MessageListComponent;
    let fixture: ComponentFixture<MessageListComponent>;
    let messageService: MessageService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MessageListComponent,
                MessageItemComponent
            ],
            providers: [
                MessageService
            ],
            imports: [
                HttpModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageListComponent);
        component = fixture.componentInstance;
        messageService = fixture.debugElement.injector.get(MessageService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('#ngOnInit', () => {

        it('should get the message list from the service', () => {
            // given
            spyOn(messageService, 'getMessages').and.returnValue(Observable.of());

            // when
            component.ngOnInit();

            // then
            expect(messageService.getMessages).toHaveBeenCalled();
        });

        it('should set message list with service returned messages', () => {
            // given
            spyOn(messageService, 'getMessages').and.returnValue(Observable.of([
                new Message('John Doe', 'Hello I am John !')
            ]));

            // when
            component.ngOnInit();
            fixture.detectChanges();

            // then
            expect(component.messages).toEqual([
                new Message('John Doe', 'Hello I am John !')
            ]);
        });

    });

});
