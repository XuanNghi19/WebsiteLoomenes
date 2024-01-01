import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-blog-particular',
  templateUrl: './blog-particular.component.html',
  styleUrls: ['./blog-particular.component.css'],
})
export class BlogParticularComponent {
  isOpenedMenu = false;

  onToggleMenu() {
    this.isOpenedMenu = !this.isOpenedMenu;
  }
}
