import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInscripcionesComponent } from './tabla-inscripciones.component';

describe('TablaInscripcionesComponent', () => {
  let component: TablaInscripcionesComponent;
  let fixture: ComponentFixture<TablaInscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
