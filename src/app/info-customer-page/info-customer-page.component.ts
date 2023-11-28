import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-info-customer-page',
  templateUrl: './info-customer-page.component.html',
  styleUrls: ['./info-customer-page.component.css'],
})
export class InfoCustomerPageComponent {
  user = {
    name: '',
    tel: '',
    address: '',
    note: '',
  };

  onBlurInput(element: any) {
    if (!element.value) {
      element.classList.add('require');
      element
        .closest('div')
        .querySelector('span.hidden')
        .classList.add('active');
    }
  }

  onChangeInput(element: any) {
    element.classList.remove('require');
    element
      .closest('div')
      .querySelector('span.hidden')
      .classList.remove('active');
  }
}
