import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageInputComponent} from './message-input.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from '../shared/message.service';
import {Message} from '../shared/message';

describe('MessageInputComponent', () => {
    let component: MessageInputComponent;
    let fixture: ComponentFixture<MessageInputComponent>;
    let messageService: MessageService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [MessageService],
            declarations: [MessageInputComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageInputComponent);
        component = fixture.componentInstance;
        messageService = fixture.debugElement.injector.get(MessageService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('onInit', () => {
        it('should have an empty field', () => {
            // when
            component.ngOnInit();

            // then
            expect(component.textMessage).toEqual('');
        });
    });

    describe('#addMessage', () => {

        it('should create new message by using the message service', () => {
            // given
            component.textMessage = 'Angular 4 is the best framework ever!';
            spyOn(messageService, 'createMessage').and.stub();
            
            // when
            component.addMessage();
            
            // then
            expect(messageService.createMessage).toHaveBeenCalledTimes(1);
            expect(messageService.createMessage).toHaveBeenCalledWith(new Message ('me', 'Angular 4 is the best framework ever!'));
        });

        it('should clean the textMessage input', () => {
            // given
            component.textMessage = 'blabla';
            
            // when
            component.addMessage();
            
            // then
            expect(component.textMessage).toEqual('');
        });
    });


});
