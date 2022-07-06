import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { HeroService } from '../../services/hero/hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        DashboardComponent,
        AppRoutingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getHeroes successful', () => {
    component.ngOnInit();

    expect(component.heroes.length).toBe(5);
  });

  it('should getHeroes successful', () => {
    component.ngOnInit();

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('a').item(0).textContent).toBe(' Dr. Nice ');
  });
})
