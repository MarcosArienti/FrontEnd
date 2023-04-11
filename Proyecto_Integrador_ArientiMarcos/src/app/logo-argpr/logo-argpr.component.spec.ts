import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgprComponent } from './logo-argpr.component';

describe('LogoArgprComponent', () => {
  let component: LogoArgprComponent;
  let fixture: ComponentFixture<LogoArgprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArgprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
