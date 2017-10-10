import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageInputComponent} from './message-input.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from '../shared/message.service';

describe('MessageInputComponent', () => {
    let component: MessageInputComponent;
    let fixture: ComponentFixture<MessageInputComponent>;

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
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('onInit', () => {
        it('should have an empty field', () => {
            expect(component.textMessage).toEqual('');
        });
    });

    describe('onEnter', () => {

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
