import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-recipes.component.html',
  styleUrl: './city-recipes.component.css',
})
export class CityRecipesComponent {
  Recipes: any = [];
  cityId: any;
  cityName: any;

  constructor(
    private getDataService: GetdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.getDataService.getRecipeByCity(this.cityId).subscribe((res: any) => {
      res.forEach((recipe: any) => {
        this.Recipes.push({
          recipeId: recipe._id,
          recipeName: recipe.recipeName,
        });
      });
      this.Recipes = this.Recipes.reverse();
    });
  }

  viewRecipeDetails(recipeId: any) {
    this.router.navigate([`/recipeDetails/${recipeId}`]);
  }
}
