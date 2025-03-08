import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatedataService {

  constructor(private http: HttpClient) { }

  updateRecipe(recipeId: any, recipeData: any): Observable<any>{
    return this.http.post(`http://localhost:3000/recipe/update/${recipeId}`, recipeData);
  }
}
