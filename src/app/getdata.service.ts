import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  // countries: any = [];
  // states: any = [];
  // cities: any = [];
  // categories: any = [];

  // currentRoute: string = '';

  recipes: any = [];

  constructor(private http: HttpClient) {}

  seRecipes(recipes: any) {
    this.recipes = recipes;
  }

  getRecipes() {
    return this.recipes;
  }

  getAllCountries(): Observable<any> {
    return this.http.get('http://localhost:3000/country/countries');
  }

  getAllStates(): Observable<any> {
    return this.http.get('http://localhost:3000/state/states');
  }

  getAllCities(): Observable<any> {
    return this.http.get('http://localhost:3000/city/cities');
  }

  getAllCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/category/categories');
  }

  getAllRecipes(): Observable<any> {
    return this.http.get('http://localhost:3000/recipe/recipes');
  }

  viewRecipeDetails(recipeId: any): Observable<any> {
    return this.http.get(`http://localhost:3000/recipe/recipe/${recipeId}`);
  }

  getRecipeByCity(cityId: any): Observable<any> {
    return this.http.get(`http://localhost:3000/recipe/city/${cityId}`);
  }
}
