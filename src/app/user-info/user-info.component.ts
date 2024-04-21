import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  isHovered: boolean = false;

  showDropDown(){

    this.isHovered = !this.isHovered;

  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!((event.target as HTMLElement).closest('.btn') || (event.target as HTMLElement).closest('.options'))) {
      this.isHovered = false;
    }
  }

  navigateToProfile() {
    // Implement navigation to profile page
  }

  navigateToWallet() {
    // Implement navigation to wallet page
  }

}
