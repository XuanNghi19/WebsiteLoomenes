import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'Loomenes-lich-page3',
  templateUrl: './lich-page3.component.html',
  styleUrls: ['./lich-page3.component.css'],
})
export class LichPage3Component {
  @Output() newLichPage3Event = new EventEmitter<boolean>();

  showComfirmDone() {
    this.newLichPage3Event.emit(true);
  }
  
}
