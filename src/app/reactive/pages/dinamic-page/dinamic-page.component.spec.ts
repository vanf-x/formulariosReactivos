import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicPageComponent } from './dinamic-page.component';

describe('DinamicPageComponent', () => {
  let component: DinamicPageComponent;
  let fixture: ComponentFixture<DinamicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicPageComponent]
    });
    fixture = TestBed.createComponent(DinamicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
