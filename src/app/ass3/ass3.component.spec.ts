import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3Component } from './ass3.component';

describe('Ass3Component', () => {
  let component: Ass3Component;
  let fixture: ComponentFixture<Ass3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
