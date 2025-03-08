import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private http: HttpClient){}

  createCategory(data: any){
    const value = {
      categoryName: data.categoryName
    }
    this.http.post('http://localhost:3000/category/create', value).subscribe()
  }
}
