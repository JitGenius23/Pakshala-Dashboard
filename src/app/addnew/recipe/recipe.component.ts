import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetdataService } from '../../getdata.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {

  countries: any = [];
  states: any = [];
  cities: any = [];
  categories: any = [];
  imageFields: number[] = [0];

  constructor(private http: HttpClient, private getDataService: GetdataService) {}

  ngOnInit(): void {
    this.getDataService.getAllCountries().subscribe((response: any) => {
      this.countries = response.map((country: any) => country.countryName);
    });

    this.getDataService.getAllStates().subscribe((response: any) => {
      this.states = response.map((state: any) => state.stateName);
    });

    this.getDataService.getAllCities().subscribe((response: any) => {
      this.cities = response.map((city: any) => city.cityName);
    });

    this.getDataService.getAllCategories().subscribe((response: any) => {
      this.categories = response.map((category: any) => category.categoryName);
    });
  }

  addImageFields() {
    this.imageFields.push(this.imageFields.length);
    console.log(this.imageFields);
  }

  createRecipe(data: any) {
    const value = {
      cityName: data.cityName,
      categoryName: data.categoryName,
      recipeName: data.recipeName,
      ingredients: data.ingredients,
      makingProcess: data.makingProcess,
      // image: data.image,
    }
    this.http.post('http://localhost:3000/recipe/create', value).subscribe();
  }
}
