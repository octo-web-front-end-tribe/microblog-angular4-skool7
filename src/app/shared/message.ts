export class Message {
    author: string;
    content: string;
    id?: number;

    constructor (author?: string, content?: string) {
        this.author = author;
        this.content = content;
    }
}
