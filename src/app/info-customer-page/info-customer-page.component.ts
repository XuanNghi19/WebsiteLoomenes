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

  onSubmitPurchase() {
    if (this.user.name === '') {
      const name: any = document.querySelector('.inputName');
      name?.classList.add('require');
      const parent = name.closest('div');
      parent.querySelector('span.hidden').classList.add('active');
    }
    if (this.user.tel === '') {
      const tel: any = document.querySelector('.inputTel');
      tel?.classList.add('require');
      const parent = tel.closest('div');
      parent.querySelector('span.hidden').classList.add('active');
    }
    if (this.user.address === '') {
      const address: any = document.querySelector('.inputAdd');
      address?.classList.add('require');
      const parent = address.closest('div');
      parent.querySelector('span.hidden').classList.add('active');
    }
  }
}
