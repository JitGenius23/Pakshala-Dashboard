import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities: any = [];

  constructor(private getCityService: GetdataService, private router: Router) {}

  ngOnInit() {
    this.getCityService.getAllCities().subscribe((res: any) => {
      this.cities = res.map((city: any) => {
        return {
          cityId: city._id,
          cityName: city.cityName,
        };
      });
      this.cities = this.cities.reverse();
    });
  }

  // ngOnInit(){
  //   this.getCityService.getAllCities().subscribe((res: any)=>{
  //     res.forEach((city: any)=> {
  //       this.cities.push({
  //         cityId: city._id,
  //         cityName: city.cityName
  //       })
  //     });
  //     this.cities = this.cities.reverse();
  //   })
  // }

  viewRecipes(cityId: any, cityName: any) {
    this.getCityService.getRecipeByCity(cityId).subscribe((res: any) => {
      this.getCityService.seRecipes(res);
      this.router.navigate([`/cityRecipes/${cityId}`, {cityName}])
    });
  }
}
