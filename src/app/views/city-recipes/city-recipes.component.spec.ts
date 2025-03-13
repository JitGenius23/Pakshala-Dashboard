import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRecipesComponent } from './city-recipes.component';

describe('CityRecipesComponent', () => {
  let component: CityRecipesComponent;
  let fixture: ComponentFixture<CityRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
