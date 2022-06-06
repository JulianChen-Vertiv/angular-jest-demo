import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from '../message/message.service';

describe('heroService', () => {
  let heroService: HeroService;
  let messageService: MessageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        HeroService,
        MessageService
      ]
    }).compileComponents();

    heroService = TestBed.inject(HeroService);
  });

  it('should return hero list successful', () => {
    heroService.getHeroes().subscribe((list) => {
      expect(list.length).toBe(9);
      expect(messageService.messages.length).toBe(1);
    });
  });

  it('should return specific hero successful', () => {
    heroService.getHero(2).subscribe((hero) => {
      expect(hero.name).toBe('Celeritas');
      expect(messageService.messages.length).toBe(1);
    });
  });
})
