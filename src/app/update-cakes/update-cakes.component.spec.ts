import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCakesComponent } from './update-cakes.component';

describe('UpdateCakesComponent', () => {
  let component: UpdateCakesComponent;
  let fixture: ComponentFixture<UpdateCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
