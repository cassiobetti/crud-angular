import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationNomeDialogComponent } from './confirmation-nome-dialog.component';

describe('ConfirmationNomeDialogComponent', () => {
  let component: ConfirmationNomeDialogComponent;
  let fixture: ComponentFixture<ConfirmationNomeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationNomeDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmationNomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
