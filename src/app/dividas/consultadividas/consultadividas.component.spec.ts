import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadividasComponent } from './consultadividas.component';

describe('ConsultadividasComponent', () => {
  let component: ConsultadividasComponent;
  let fixture: ComponentFixture<ConsultadividasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultadividasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultadividasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
