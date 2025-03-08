import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../../getdata.service';

@Component({
  selector: 'app-dashcontent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashcontent.component.html',
  styleUrl: './dashcontent.component.css',
})
export class DashcontentComponent {
  constructor(private router: Router, private http: HttpClient, private getDataService: GetdataService) {}

  countryCount: any = '';

  cards: any = [
    { name: 'Listed Country', value: 0, click: () => this.countryClicked() },
    { name: 'Listed State', value: 0, click: () => this.stateClicked() },
    { name: 'Listed City', value: 0, click: () => this.cityClicked() },
    { name: 'Listed Category', value: 0, click: () => this.categoryClicked() },
    { name: 'Listed Recipe', value: 0, click: () => this.recipeClicked() },
  ];

  ngOnInit(): void {
    this.http.get('http://localhost:3000/stats/stats').subscribe((res: any) => {
      if (res) {
        this.cards[0].value = res.countryCount;
        this.cards[1].value = res.stateCount;
        this.cards[2].value = res.cityCount;
        this.cards[3].value = res.categoryCount;
        this.cards[4].value = res.recipeCount;
      }
    });
    console.log(this.countryCount);
  }

  countryClicked() {
    this.router.navigate(['/viewCountries']);
  }

  stateClicked() {
    this.router.navigate(['/viewStates']);
  }

  cityClicked() {
    this.router.navigate(['/viewCities']);
  }

  categoryClicked() {
    this.router.navigate(['/viewCategories']);
  }

  recipeClicked() {
    this.getDataService.getAllRecipes().subscribe((res: any) =>{
      this.getDataService.seRecipes(res);
      this.router.navigate(['/viewFoodItems']);
    })
  }
}
