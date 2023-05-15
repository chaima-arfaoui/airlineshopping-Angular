import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarerulesComponent } from './farerules.component';

describe('FarerulesComponent', () => {
  let component: FarerulesComponent;
  let fixture: ComponentFixture<FarerulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarerulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
