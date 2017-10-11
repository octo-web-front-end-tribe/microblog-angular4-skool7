import {MessageService} from './message.service';
import {Message} from './message';

describe('MessageService', () => {

    let messageService: MessageService;

    beforeEach(() => {
        messageService = new MessageService();
    });

    it('should be created', () => {
        expect(messageService).toBeTruthy();
    });

    describe('#getMessages', () => {
        it('should return the list of messages', () => {
            // when
            const result = messageService.getMessages();

            //then
            expect(result).toEqual([new Message('FLM', 'yeah')]);
        });
    });

    describe('#createMessage', () => {
        it('should add message into message collection', () => {
            // when
            messageService.createMessage({ author: 'John Doe', content: 'This skool is awesome !'});

            //then
            expect(messageService.messages).toEqual([{ author: 'John Doe', content: 'This skool is awesome !'}]);
        });
    });
});
