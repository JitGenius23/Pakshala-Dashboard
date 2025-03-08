import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetdataService } from '../../getdata.service';

@Component({
  selector: 'app-foodcategories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foodcategories.component.html',
  styleUrl: './foodcategories.component.css'
})
export class FoodcategoriesComponent {

  categories: any = [];

  constructor(private getCategoryService: GetdataService){};

  ngOnInit(){
    this.getCategoryService.getAllCategories().subscribe((res: any)=>{
      this.categories = res.map((category: any)=> {
        return {
          categoryId: category.ID,
          categoryName: category.categoryName
        }
      });
      this.categories = this.categories.reverse();
    })
  }

}
