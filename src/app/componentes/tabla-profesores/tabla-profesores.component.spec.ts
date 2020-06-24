import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProfesoresComponent } from './tabla-profesores.component';

describe('TablaProfesoresComponent', () => {
  let component: TablaProfesoresComponent;
  let fixture: ComponentFixture<TablaProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
