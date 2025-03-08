import { Component } from '@angular/core';
import { UpdatedataService } from '../../updatedata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from '../../getdata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css',
})
export class UpdateRecipeComponent {
  recipeDetails: any = {};
  recipeId: string | null = null;

  constructor(
    private viewRecipeDetailsService: GetdataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      this.viewRecipeDetailsService
        .viewRecipeDetails(this.recipeId)
        .subscribe((res) => {
          this.recipeDetails = res;
        });
    });
  }

  updateRecipe(data: any, recipeId: any) {
    const value = {
      recipeName: data.recipeName,
      ingredients: data.ingredients,
      makingProcess: data.makingProcess,
    };
    this.http
      .put(`http://localhost:3000/recipe/update/${recipeId}`, value)
      .subscribe((res) => {
        // console.log(res);
      });
    this.router.navigate([`/recipeDetails/${recipeId}`]);
  }
}
