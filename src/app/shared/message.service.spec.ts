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
            get: () => {
                return Observable.create(observer => {
                    observer.next({json: () => ([{id: 1, content: 'hello', author: 'John'}])});
                    observer.complete();
                });
            },
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

        beforeEach(() => {
            messageService.API_URL = 'http://fake.base.url';
        });

        it('should get list of messages from API', inject([Http, MessageService], (http: Http, service: MessageService) => {
            // given
            const spy = spyOn(http, 'get').and.callThrough();

            // when
            service.getMessages().subscribe(() => {
            });

            // then
            expect(spy).toHaveBeenCalledWith('http://fake.base.url');
        }));

        it('should return list of messages', inject([Http, MessageService], (http: Http, service: MessageService) => {
            // when
            service.getMessages().subscribe((messages: Message[]) => {
                // then
                expect(messages).toEqual([{id: 1, content: 'hello', author: 'John'}]);
            });

        }));
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
