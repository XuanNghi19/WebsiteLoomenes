import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Loomenes-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements AfterViewInit {
  
  imgBaners = '/assets/home/header_home_banners.png';
  stickerBag = '/assets/home/bag.svg';
  stickerPackage = '/assets/home/package.svg';
  stickerShoe = '/assets/home/shoe.svg';
  bns = '/assets/home/bns.png';

  scroll_box_img1 = '/assets/home/image 32.png';
  scroll_box_img2 = '/assets/home/image 33.png';
  scroll_box_img3 = '/assets/home/image 34.png';
  scroll_box_img4 = '/assets/home/image 35.png';

  serviceImgs: string[] = [
    '/assets/home/image 27.png',
    '/assets/home/image 29.png',
    '/assets/home/image 67.png',
    '/assets/home/image 68.png',
    '/assets/home/image 69.png',
    '/assets/home/image 28.png',
  ];

  product: string[] = [
    '/assets/home/image 42.png',
    '/assets/home/img 70.png',
    '/assets/home/img 71.png',
    '/assets/home/img 72.png',
    '/assets/home/img 73.png',
    '/assets/home/img 74.png',
  ];

  iconMenuBook = '/assets/home/menu book_.svg';

  @ViewChild('scrollBox') scrollBox!: ElementRef;
  @ViewChild('serviceBox') serviceBox!: ElementRef;

  ngAfterViewInit() {
    const service_box = this.serviceBox.nativeElement as HTMLElement;

    this.prevServiceBox = (): void => {
      service_box;
      if (service_box.scrollLeft > 0) {
        service_box.scrollLeft -= 353 + 48;
      }
    };

    this.nextServiceBox = () => {
      if(service_box.scrollLeft + service_box.clientWidth <= service_box.scrollWidth) {
        service_box.scrollLeft += 353 + 48;
      }
    }

    this.onMouseDown = (event: MouseEvent): void => {
      this.isMouseDown = true;
      this.lastY = event.clientY;
    };

    this.onMouseUp = (): void => {
      this.isMouseDown = false;
    };

    this.onMouseLeave = () => {
      this.isMouseDown = false;
    };

    this.onMouseMove = (event: MouseEvent) => {
      // const rect = this.scrollBox.nativeElement.getBoundingClientRect();

      // console.log(`Mouse position: (${event.clientX}, ${event.clientY})`);
      // console.log(`Box position: (${rect.top}, ${rect.left})`)

      if (!this.isMouseDown) return;

      const deltaY = event.clientY - this.lastY;
      this.scrollBox.nativeElement.scrollTop -= deltaY;
      // console.log(`scrollTop: (${this.scrollBox.nativeElement.scrollTop})`)
      this.lastY = event.clientY;
    };
  }

  prevServiceBox(): void {
    this.prevServiceBox();
  }

  nextServiceBox(): void {
    this.nextServiceBox();
  }

  isMouseDown = false;
  lastY = 0;

  onMouseDown(event: MouseEvent): void {
    this.onMouseDown(event);
  }

  onMouseUp() {
    this.onMouseUp();
  }

  onMouseLeave() {
    this.onMouseLeave();
  }

  onMouseMove(event: MouseEvent) {
    this.onMouseMove(event);
  }
}
