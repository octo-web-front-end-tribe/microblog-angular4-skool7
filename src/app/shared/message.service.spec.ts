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

    it('should return the list of messages', () => {
        // when
        const result = messageService.getMessages();

        //then
        expect(result).toEqual([new Message('FLM', 'yeah')]);
    });
});
