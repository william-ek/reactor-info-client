import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorDialogComponent } from './reactor-dialog.component';

describe('ReactorDialogComponent', () => {
  let component: ReactorDialogComponent;
  let fixture: ComponentFixture<ReactorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
