import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFightComponent } from './search-fight.component';

describe('SearchFightComponent', () => {
  let component: SearchFightComponent;
  let fixture: ComponentFixture<SearchFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
