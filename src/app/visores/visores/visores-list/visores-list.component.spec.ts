import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisoresListComponent } from './visores-list.component';

describe('VisoresListComponent', () => {
  let component: VisoresListComponent;
  let fixture: ComponentFixture<VisoresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisoresListComponent]
    });
    fixture = TestBed.createComponent(VisoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
