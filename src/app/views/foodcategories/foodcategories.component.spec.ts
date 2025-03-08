import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcategoriesComponent } from './foodcategories.component';

describe('FoodcategoriesComponent', () => {
  let component: FoodcategoriesComponent;
  let fixture: ComponentFixture<FoodcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodcategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
