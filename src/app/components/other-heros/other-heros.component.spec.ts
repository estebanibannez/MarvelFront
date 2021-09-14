import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHerosComponent } from './other-heros.component';

describe('OtherHerosComponent', () => {
  let component: OtherHerosComponent;
  let fixture: ComponentFixture<OtherHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
