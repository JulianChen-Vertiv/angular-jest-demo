import { APP_BASE_HREF, CommonModule, Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { HeroService } from '../../services/hero/hero.service';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService: HeroService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue:
            { snapshot: { paramMap: convertToParamMap( { 'id': 12 } ) } }
        },
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        Location
      ],
      imports: [
        HeroDetailComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hero id 12 info', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.hero?.id).toBe(12);
  });

  it('should get title with hero name', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h2')?.textContent).toBe('DR. NICE Details');
  });

  it('should trigger location go back', () => {
    const locationSpy = jest.spyOn(location, 'back');
    component.goBack();

    expect(locationSpy).toHaveBeenCalledTimes(1);
  });
})
