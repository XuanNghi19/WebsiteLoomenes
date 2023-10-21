import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Loomenes-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  ngAfterViewInit(): void {}

  imgBaners = '/assets/home/header_home_banners.png';
  stickerBag = '/assets/home/bag.svg';
  stickerPackage = '/assets/home/package.svg';
  stickerShoe = '/assets/home/shoe.svg';
  bns = '/assets/home/bns.png';

  scroll_box_img1 = '/assets/home/image 32.png';
  scroll_box_img2 = '/assets/home/image 33.png';
  scroll_box_img3 = '/assets/home/image 34.png';
  scroll_box_img4 = '/assets/home/image 35.png';

  iconMenuBook = '/assets/home/menu book_.svg';

  @ViewChild('scrollBox') scrollBox!: ElementRef;

  isMouseDown = false;
  lastY = 0;

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.lastY = event.clientY;
  }

  onMouseUp() {
    this.isMouseDown = false;
  }

  onMouseLeave() {
    this.isMouseDown = false;
  }

  onMouseMove(event: MouseEvent) {
    // const rect = this.scrollBox.nativeElement.getBoundingClientRect();

    // console.log(`Mouse position: (${event.clientX}, ${event.clientY})`);
    // console.log(`Box position: (${rect.top}, ${rect.left})`)

    if (!this.isMouseDown) return;

    const deltaY = event.clientY - this.lastY;
    this.scrollBox.nativeElement.scrollTop -= deltaY;
    // console.log(`scrollTop: (${this.scrollBox.nativeElement.scrollTop})`)
    this.lastY = event.clientY;
  }
}
