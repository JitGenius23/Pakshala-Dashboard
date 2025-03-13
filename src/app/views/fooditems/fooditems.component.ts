import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fooditems',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fooditems.component.html',
  styleUrl: './fooditems.component.css',
})
export class FooditemsComponent {
  Recipes: any = [];

  constructor(
    private getRecipeService: GetdataService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipeService.getAllRecipes().subscribe((res: any) => {
      res.forEach((recipe: any) => {
        this.Recipes.push({
          recipeId: recipe._id,
          recipeName: recipe.recipeName,
          categoryId: recipe.categoryName,
          cityId: recipe.city,
        });
      });
      this.Recipes = this.Recipes.reverse();
    });
  }
  viewRecipeDetails(recipeId: any, categoryId: any, cityId: any) {
    this.router.navigate([`/recipeDetails/${recipeId}`, { categoryId, cityId }]);
  }
}
