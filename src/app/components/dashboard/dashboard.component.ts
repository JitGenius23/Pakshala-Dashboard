import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarOpen = false;
  isDropdownOpen: boolean = false;
  activeRouterLink: string = '';

  routeNames: { [key: string]: string } = {
    '/dashcontent': 'Dashboard',
    '/addCountry': 'Add a New Country',
    '/addState': 'Add a New State',
    '/addCity': 'Add a New City',
    '/addCategory': 'Add a New Food Item Category',
    '/addNewRecipe': 'Add New Recipe',
    '/showAllEntries': 'All Entries',
  };

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRouterLink = this.routeNames[event.url] || '';
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const hamburger = document.querySelector('.hamburgurmenu') as HTMLElement;
    hamburger.style.visibility = this.isSidebarOpen ? 'hidden' : 'visible';
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  sidebarToggle() {
    this.isSidebarOpen = false;
    this.isDropdownOpen = false;
  }

}
