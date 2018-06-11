import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageInputComponent} from './message-input.component';
import {FormsModule} from '@angular/forms';
import {MessageService} from '../shared/message.service';
import {Message} from '../shared/message';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {MessageListComponent} from '../message-list/message-list.component';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  let componentList: MessageListComponent;
  let fixtureList: ComponentFixture<MessageListComponent>;

  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [MessageService],
      declarations: [
        MessageInputComponent,
        MessageListComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;

    fixtureList = TestBed.createComponent(MessageListComponent);
    componentList = fixtureList.componentInstance;

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

    describe('when i post the message', () => {
      beforeEach(() => {
        // given
        component.textMessage = 'Angular 4 is the best framework ever!';
        spyOn(messageService, 'createMessage').and.returnValue(Observable.of());
        spyOn(componentList, 'addOneMessageIntoList').and.returnValue(undefined);

        // when
        component.addMessage();
      });

      it('should create new message by using the message service', () => {
        // then
        expect(messageService.createMessage).toHaveBeenCalledTimes(1);
        expect(messageService.createMessage).toHaveBeenCalledWith(new Message('me', 'Angular 4 is the best framework ever!'));
      });


      it('should call message-list component to add the new message', () => {
        expect(componentList.addOneMessageIntoList).toHaveBeenCalledTimes(1);
      });
    });


    it('should clean the textMessage input', () => {
      // given
      spyOn(messageService, 'createMessage').and.returnValue(Observable.of());
      component.textMessage = 'blabla';

      // when
      component.addMessage();
      fixture.detectChanges();

      // then
      expect(component.textMessage).toEqual('');
    });

  });
});
