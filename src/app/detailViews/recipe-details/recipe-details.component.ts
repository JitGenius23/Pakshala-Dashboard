import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatedataService } from '../../updatedata.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  constructor(
    private http: HttpClient,
    private getDataService: GetdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  recipeId: string | null = null;
  recipeDetails: any = {};
  categoryId: any;
  cityId: any;

  ngOnInit() {
    // Get recipeId from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      this.getDataService
        .viewRecipeDetails(this.recipeId)
        .subscribe((res: any) => {
          this.recipeDetails = res;
        });
    });
  }

  updateRecipe() {
    this.router.navigate([`/updateRecipe/${this.recipeId}`]);
  }
  
  deleteRecipe() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.cityId = this.route.snapshot.paramMap.get('cityId');
    if (confirm('Are you sure you want to delete this recipe?') === true) {
      this.http
        .delete(`http://localhost:3000/recipe/delete/${this.recipeId}/${this.categoryId}/${this.cityId}`)
        .subscribe(() => {});
      this.router.navigate(['/viewFoodItems']);
    }
  }
}
