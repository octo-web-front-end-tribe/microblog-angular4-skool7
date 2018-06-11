import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageItemComponent} from './message-item.component';
import {By} from '@angular/platform-browser';

describe('MessageItemComponent', () => {
    let component: MessageItemComponent;
    let fixture: ComponentFixture<MessageItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessageItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should render an author by default', () => {
        // given
        component.message = {
            author: 'John Doe',
            content: ''
        };

        // when
        fixture.detectChanges();

        // then
        const debugElement = fixture.debugElement.query(By.css('.message__author'));
        expect(debugElement.nativeElement.textContent).toEqual('John Doe');
    });
});
