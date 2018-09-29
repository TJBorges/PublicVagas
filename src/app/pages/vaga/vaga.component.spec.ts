import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaComponent } from './vaga.component';

describe('VagaComponent', () => {
  let component: VagaComponent;
  let fixture: ComponentFixture<VagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
