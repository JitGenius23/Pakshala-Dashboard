import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css',
})
export class StatesComponent {
  states: any = [];

  constructor(private getStateService: GetdataService, private router: Router) {}

  ngOnInit() {
     this.getStateService.getAllStates().subscribe((response: any) => {
       this.states = response.map((state: any) => {
        return {
          stateId: state.ID,
          stateName: state.stateName
        }
       });
       this.states = this.states.reverse();
     })
  }

  viewCities(){
    this.router.navigate(['/viewCities']);
  }
}
