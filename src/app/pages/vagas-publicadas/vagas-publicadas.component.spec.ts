import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasPublicadasComponent } from './vagas-publicadas.component';

describe('VagasPublicadasComponent', () => {
  let component: VagasPublicadasComponent;
  let fixture: ComponentFixture<VagasPublicadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagasPublicadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasPublicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
