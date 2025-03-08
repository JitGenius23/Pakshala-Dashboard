import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetdataService } from '../../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  countries: any = [];

  constructor(private getCountryService: GetdataService, private router: Router) {}

  ngOnInit(): void {
    this.getCountryService.getAllCountries().subscribe((response: any) => {
      this.countries = response.map((country: any) => {
         return {
          countryId: country.ID,
          countryName: country.countryName
         }
      });
      this.countries = this.countries.reverse();
    });
  
  }

  viewStates(){
    this.router.navigate(['/viewStates']);
  }
}
