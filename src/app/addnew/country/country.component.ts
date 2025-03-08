import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  message = '';
  isError = false;

  constructor(private router: Router, private http: HttpClient) {}

  createCountry(data: any) {
    const value = {
      countryName: data.countryName,
    };
    this.http.post('http://localhost:3000/country/create', value).subscribe({
      next: (res) => {
        this.message = 'Country created successfully';
        this.isError = false;
      },
      error: (err) => {
        this.message = err.error.message || 'something went wrong';
        this.isError = true;
      },
    });
    // this.router.navigate(['/viewCountries']);
  }
}
