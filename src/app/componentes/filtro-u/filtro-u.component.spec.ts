import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroUComponent } from './filtro-u.component';

describe('FiltroUComponent', () => {
  let component: FiltroUComponent;
  let fixture: ComponentFixture<FiltroUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
