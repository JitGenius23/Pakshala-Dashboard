import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css',
})
export class StateComponent {
  countries: any = [];

   

  constructor(private getCountriesService: GetdataService, private http: HttpClient) {}

  ngOnInit() {
      this.getCountriesService.getAllCountries().subscribe((res: any)=>{
        this.countries = res.map((country: any)=> country.countryName);
        this.countries = this.countries.reverse();
      })
  }

  createState(data:any){
    const value = {
      stateName: data.stateName,
      country:  data.country
    }
    this.http.post('http://localhost:3000/state/create', value).subscribe((res)=>{
      console.log(res);
    })
    console.log(value.stateName, value.country);
  }
}
