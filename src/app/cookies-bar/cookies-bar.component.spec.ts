import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesBarComponent } from './cookies-bar.component';

describe('CookiesBarComponent', () => {
  let component: CookiesBarComponent;
  let fixture: ComponentFixture<CookiesBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesBarComponent]
    });
    fixture = TestBed.createComponent(CookiesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
