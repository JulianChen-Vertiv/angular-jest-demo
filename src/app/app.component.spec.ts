import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from './services/auth/auth.service';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular with Jest'`, () => {
    expect(component.title).toEqual('Angular with Jest');
  });

  it('should have one nav links without login', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('a')?.length).toBe(1);
    expect(compiled.querySelectorAll('a')?.item(0).textContent).toBe('Dashboard');
  });

  // it('should have two nav links without login', () => {
  //   const navigateSpy = jest.spyOn(router, 'navigate');
  //
  //   component.login('ROLE_ADMIN');
  //   fixture.detectChanges();
  //
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelectorAll('a')?.length).toBe(2);
  //   expect(compiled.querySelectorAll('a')?.item(0).textContent).toBe('Dashboard');
  //   expect(compiled.querySelectorAll('a')?.item(1).textContent).toBe('Heroes');
  //
  //   expect(navigateSpy).toHaveBeenCalledWith(['/heroes']);
  // });

  it('should logout successful', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.logout();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('a')?.length).toBe(1);
    expect(compiled.querySelectorAll('a')?.item(0).textContent).toBe('Dashboard');

    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });
});
