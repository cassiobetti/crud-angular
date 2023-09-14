import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisoresComponent } from './visores.component';

describe('VisoresComponent', () => {
  let component: VisoresComponent;
  let fixture: ComponentFixture<VisoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisoresComponent]
    });
    fixture = TestBed.createComponent(VisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
