import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('heroService', () => {
  let messageService: MessageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        MessageService
      ]
    }).compileComponents();

    messageService = TestBed.inject(MessageService);
  });

  it('should add message successful', () => {
   messageService.add('first message');
   expect(messageService.messages.length).toBe(1);
  });

  it('should clear message successful', () => {
    messageService.add('first message');
    messageService.clear();
    expect(messageService.messages.length).toBe(0);
  });
})
