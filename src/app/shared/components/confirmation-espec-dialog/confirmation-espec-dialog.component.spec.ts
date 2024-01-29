import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationEspecDialogComponent } from './confirmation-espec-dialog.component';

describe('ConfirmationEspecDialogComponent', () => {
  let component: ConfirmationEspecDialogComponent;
  let fixture: ComponentFixture<ConfirmationEspecDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationEspecDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmationEspecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
