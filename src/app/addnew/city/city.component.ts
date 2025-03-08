import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetdataService } from '../../getdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {
  states: any = [];

  constructor(
    private getStateService: GetdataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getStateService.getAllStates().subscribe((response: any) => {
      this.states = response.map((state: any) => state.stateName);
      this.states = this.states.reverse();
    })
  }

  createState(data: any) {
    const value = {
      cityName: data.cityName,
      stateName: data.stateName,
    };
    this.http.post('http://localhost:3000/city/create', value).subscribe();
  }
}
