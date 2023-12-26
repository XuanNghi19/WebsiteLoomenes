import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent {
  onExpandPara(self: any) {
    const element = document.getElementById('baivietphobien1');
    self.classList.add('hide');
    element?.classList.add('expand');
    console.log(element);
  }
}
