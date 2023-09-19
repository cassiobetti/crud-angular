import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisoresFormComponent } from './visores-form.component';

describe('VisoresFormComponent', () => {
  let component: VisoresFormComponent;
  let fixture: ComponentFixture<VisoresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisoresFormComponent]
    });
    fixture = TestBed.createComponent(VisoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
