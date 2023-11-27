import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-header-navigator',
  templateUrl: './header-navigator.component.html',
  styleUrls: ['./header-navigator.component.css'],
})
export class HeaderNavigatorComponent {
  isOpenedMenu = false;

  onToggleMenu() {
    this.isOpenedMenu = !this.isOpenedMenu;
  }
}
