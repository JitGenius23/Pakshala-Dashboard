import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashcontentComponent } from './components/dashcontent/dashcontent.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CountryComponent } from './addnew/country/country.component';
import { StateComponent } from './addnew/state/state.component';
import { CityComponent } from './addnew/city/city.component';
import { CategoryComponent } from './addnew/category/category.component';
import { CountriesComponent } from './views/countries/countries.component';
import { StatesComponent } from './views/states/states.component';
import { CitiesComponent } from './views/cities/cities.component';
import { FoodcategoriesComponent } from './views/foodcategories/foodcategories.component';
import { RecipeComponent } from './addnew/recipe/recipe.component';
import { FooditemsComponent } from './views/fooditems/fooditems.component';
import { RecipeDetailsComponent } from './detailViews/recipe-details/recipe-details.component';
import { UpdateRecipeComponent } from './actionCenter/update-recipe/update-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashcontent',
        loadComponent: () =>
          import('./components/dashcontent/dashcontent.component').then(
            (m) => m.DashcontentComponent
          ),
      },
      // { path: 'showAllEntries', component: DataTableComponent },
      {
        path: 'addCountry',
        loadComponent: () =>
          import('./addnew/country/country.component').then(
            (m) => m.CountryComponent
          ),
      },
      {
        path: 'addState',
        loadComponent: () =>
          import('./addnew/state/state.component').then(
            (m) => m.StateComponent
          ),
      },
      {
        path: 'addCity',
        loadComponent: () =>
          import('./addnew/city/city.component').then((m) => m.CityComponent),
      },
      {
        path: 'addCategory',
        loadComponent: () =>
          import('./addnew/category/category.component').then(
            (m) => m.CategoryComponent
          ),
      },
      {
        path: 'addRecipe',
        loadComponent: () =>
          import('./addnew/recipe/recipe.component').then(
            (m) => m.RecipeComponent
          ),
      },
      {
        path: 'viewCountries',
        loadComponent: () =>
          import('./views/countries/countries.component').then(
            (m) => m.CountriesComponent
          ),
      },
      {
        path: 'viewStates',
        loadComponent: () =>
          import('./views/states/states.component').then(
            (m) => m.StatesComponent
          ),
      },
      {
        path: 'viewCities',
        loadComponent: () =>
          import('./views/cities/cities.component').then(
            (m) => m.CitiesComponent
          ),
      },
      {
        path: 'viewCategories',
        loadComponent: () =>
          import('./views/foodcategories/foodcategories.component').then(
            (m) => m.FoodcategoriesComponent
          ),
      },
      {
        path: 'viewFoodItems',
        loadComponent: () =>
          import('./views/fooditems/fooditems.component').then(
            (m) => m.FooditemsComponent
          ),
      },
      {
        path: 'recipeDetails/:id',
        loadComponent: () =>
          import('./detailViews/recipe-details/recipe-details.component').then(
            (m) => m.RecipeDetailsComponent
          ),
      },
      {
        path: 'updateRecipe/:id',
        loadComponent: () =>
          import('./actionCenter/update-recipe/update-recipe.component').then(
            (m) => m.UpdateRecipeComponent
          ),
      },
      {
        path: 'cityRecipes/:id',
        loadComponent: () =>
          import('./views/city-recipes/city-recipes.component').then(
            (m) => m.CityRecipesComponent
          ),
      },
    ],
  },
];
