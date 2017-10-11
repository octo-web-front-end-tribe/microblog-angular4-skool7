import {MessageService} from './message.service';
import {Message} from './message';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Http} from '@angular/http';
import {TestBed, fakeAsync, inject} from '@angular/core/testing';

describe('MessageService', () => {

    let httpStub;
    let messageService: MessageService;

    beforeEach(() => {
        httpStub = {
            post: () => {
                return Observable.create(observer => {
                    observer.next({json: () => ({id: 1, content: 'hello', author: 'John'})});
                    observer.complete();
                });
            }
        };

        TestBed.configureTestingModule({
            providers: [
                MessageService,
                {provide: Http, useValue: httpStub}
            ]
        });
        messageService = TestBed.get(MessageService);
    });

    it('should be created', () => {
        expect(messageService).toBeTruthy();
    });

    it('should set API_URL attribute', () => {
        expect(messageService.API_URL).toEqual('http://microblog-api.herokuapp.com/api/messages');
    });

    describe('#getMessages', () => {
        it('should return the list of messages', () => {
            // when
            const result = messageService.getMessages();

            // then
            expect(result).toEqual([new Message('FLM', 'yeah')]);
        });
    });

    describe('#createMessage', () => {

        beforeEach(() => {
            messageService.API_URL = 'http://fake.base.url';
        });

        it('should post new message and', inject([Http, MessageService], (http: Http, service: MessageService) => {
            // given
            const spy = spyOn(http, 'post').and.callThrough();

            // when
            service.createMessage({author: 'John', content: 'hello'} as Message).subscribe(() => {
            });

            // then
            expect(spy).toHaveBeenCalledWith('http://fake.base.url', {author: 'John', content: 'hello'});
        }));
    });
});
