import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-lich-new',
  templateUrl: './lich-new.component.html',
  styleUrls: ['./lich-new.component.css'],
})
export class LichNewComponent {
  onHidePage1() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    page1?.classList.add('hide');
    page2?.classList.add('show');
  }
}
