import { Router } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'Loomenes-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {

  constructor(private router: Router) {}
  stateDatLich = 0;
  stateDatlich_pc = 0;

  hideHome = false;
  isConfirmDone = false;
  isShowLichNew = false;
  isShowLichPage3 = false;

  statePageConfirmDone(flag: boolean) {
    document.getElementById('top')?.scrollIntoView();
    this.isShowLichPage3 = false;
    this.isConfirmDone = flag;
    this.hideHome = false;
  }

  cancelComfirmDone() {
    this.isConfirmDone = false;
  }

  stateShowLichNew(flag: boolean) {
    this.hideHome = true;
    this.isShowLichNew = flag;
  }

  stateShowLichPage3(flag: boolean) {
    document.getElementById('top')?.scrollIntoView();
    this.isShowLichPage3 = flag;
    this.isShowLichNew = !flag;
  }
  showPageConfirm() {
    const pageconfirm = document.getElementById('pageconfirm');
    pageconfirm?.classList.add('show');
    pageconfirm?.classList.remove('hide');
  }
  hidePageConfirm() {
    const pageconfirm = document.getElementById('pageconfirm');
    pageconfirm?.classList.add('hide');
  }
  CancelDatlich() {
    const pageconfirm = document.getElementById('pageconfirm');
    pageconfirm?.classList.add('hide');
  }

  datlichtab() {
    const pageconfirmtab = document.getElementById('pageconfirm_tab');
    pageconfirmtab?.classList.remove('hide');
  }
  clickclosebtn_tab() {
    const clickclosebtn_tab = document.getElementById('pageconfirm_tab');

    clickclosebtn_tab?.classList.add('hide');
    this.stateDatLich = 0;
  }
  clickclosebtn_pc() {
    const clickclosebtn_pc = document.getElementById('pageconfirmpc');
    clickclosebtn_pc?.classList.add('hide');
    this.stateDatlich_pc = 0;
  }
  tieptucdatlich1() {
    const clickclosebtn_tab = document.getElementById('pageconfirm_tab');
    clickclosebtn_tab?.classList.add('hide');
    const pagedatlich1_2_tab = document.getElementById('pagedatlich1_2_tab');
    pagedatlich1_2_tab?.classList.remove('hide');
    const thongtinpage1_tab = document.getElementById('thongtinpage1_tab');
    thongtinpage1_tab?.classList.remove('hide');
  }
  statePagedatlich(index: number) {
    document.getElementById('pageconfirm_tab')?.classList.add('hide');
    if (index == 0) {
      this.isConfirmDone = true;
    }

    this.stateDatLich = index;
  }
  statePagedatlichpc(index: number) {
    document.getElementById('pageconfirmpc')?.classList.add('hide');
    if (index == 0) {
      this.isConfirmDone = true;
    }
    this.stateDatlich_pc = index;
  }
  showpageconfirm() {
    const pageconfirmpc = document.getElementById('pageconfirmpc');
    pageconfirmpc?.classList.remove('hide');
  }

  imgBanersPhone = '/assets/home/home banner phone.svg';
  imgBaners = '/assets/home/header_home_banners.svg';
  stickerBag = '/assets/home/bag.svg';
  stickerPackage = '/assets/home/package.svg';
  stickerShoe = '/assets/home/shoe.svg';
  bns = '/assets/home/bns.png';

  scroll_box_img1 = '/assets/home/image 32.png';
  scroll_box_img2 = '/assets/home/image 33.png';
  scroll_box_img3 = '/assets/home/image 34.png';
  scroll_box_img4 = '/assets/home/image 35.png';

  // servicesBox: service_box[] = [
  //   new service_box('/assets/home/image 27.png', 'CHUYÊN SÂU'),
  //   new service_box('/assets/home/image 29.png', 'Sửa đóng\nđế giày âu'),
  //   new service_box('/assets/home/image 67.png', 'Custom Giày'),
  //   new service_box('/assets/home/image 68.png', 'Sửa đế giày'),
  //   new service_box('/assets/home/image 69.png', 'Sơn giày'),
  //   new service_box('/assets/home/image 28.png', 'vệ sinh\nnâng cao'),
  // ];

  serviceImgs: string[] = [
    '/assets/home/image 27.png',
    '/assets/home/image 29.png',
    '/assets/home/image 67.png',
    '/assets/home/image 68.png',
    '/assets/home/image 69.png',
    '/assets/home/image 28.png',
  ];

  mobileProduct: string[] = [
    '/assets/home/product ddvs.svg',
    '/assets/home/product kdd.svg',
    '/assets/home/product đd.svg',
  ];

  tapletProduct: string[] = [
    '/assets/home/Group 302.svg',
    '/assets/home/Group 301.svg',
    '/assets/home/Group 242.svg',
  ];

  slProduct: string = this.mobileProduct[0];

  iconMenuBook = '/assets/home/menu book_.svg';

  @ViewChild('scrollBox') scrollBox!: ElementRef;
  @ViewChild('serviceBox') serviceBox!: ElementRef;
  @ViewChild('serviceBoxTaplet') serviceBoxTaplet!: ElementRef;
  @ViewChild('serviceBoxPc') serviceBoxPc!: ElementRef;
  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;
  @ViewChild('dot3') dot3!: ElementRef;
  slIdxProduct = 0;

  ngAfterViewInit() {
    const service_box = this.serviceBox.nativeElement as HTMLElement;
    const serviceBox_Taplet = this.serviceBoxTaplet
      .nativeElement as HTMLElement;
    const serviceBox_Pc = this.serviceBoxPc.nativeElement as HTMLElement;
    const dot_1 = this.dot1.nativeElement as HTMLElement;
    const dot_2 = this.dot2.nativeElement as HTMLElement;
    const dot_3 = this.dot3.nativeElement as HTMLElement;

    this.prevServiceBox = (responsive: string): void => {
      if (responsive == 'sm') {
        serviceBox_Taplet.scrollLeft -= 252 + 36;
        console.log('prev');
      } else if (responsive == 'xl') {
        serviceBox_Pc.scrollLeft -= 354 + 51;
      } else {
        service_box.scrollLeft -= 106 + 15;
      }
    };

    this.nextServiceBox = (responsive: string) => {
      if (
        service_box.scrollLeft + service_box.clientWidth <=
        service_box.scrollWidth
      ) {
        if (responsive == 'sm') {
          serviceBox_Taplet.scrollLeft += 252 + 36;
          console.log('next');
        } else if (responsive == 'xl') {
          serviceBox_Pc.scrollLeft += 354 + 51;
        } else {
          service_box.scrollLeft += 106 + 15;
        }
      }
    };

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

    this.getProduct = (idx: number): void => {
      this.slIdxProduct = idx;
      switch (idx) {
        case 0:
          dot_1.style.backgroundColor = '#F1CF87';
          dot_2.style.backgroundColor = '#9F9F9F';
          dot_3.style.backgroundColor = '#9F9F9F';
          break;
        case 1:
          dot_1.style.backgroundColor = '#9F9F9F';
          dot_2.style.backgroundColor = '#F1CF87';
          dot_3.style.backgroundColor = '#9F9F9F';
          break;
        case 2:
          dot_1.style.backgroundColor = '#9F9F9F';
          dot_2.style.backgroundColor = '#9F9F9F';
          dot_3.style.backgroundColor = '#F1CF87';
          break;
      }
    };

    this.onTouchStart = (event: TouchEvent) => {
      this.lastXProduct = event.changedTouches[0].clientX;
    };

    this.onTouchEnd = (event: TouchEvent) => {
      const deltaX = this.lastXProduct - event.changedTouches[0].clientX;
      if (deltaX > 0 && this.slIdxProduct < 2) {
        this.slIdxProduct++;
        this.getProduct(this.slIdxProduct);
      } else if (deltaX < 0 && this.slIdxProduct > 0) {
        this.slIdxProduct--;
        this.getProduct(this.slIdxProduct);
      }
      console.log(deltaX);
      this.lastXProduct = 0;
    };
  }

  lastXProduct = 0;

  onTouchStart(event: TouchEvent) {
    this.onTouchStart(event);
  }

  onTouchEnd(event: TouchEvent) {
    this.onTouchEnd(event);
  }

  getProduct(idx: number): void {
    this.getProduct(idx);
  }

  prevServiceBox(responsive: string): void {
    this.prevServiceBox(responsive);
  }

  nextServiceBox(responsive: string): void {
    this.nextServiceBox(responsive);
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

  openChat(): void {
    window.open('https://www.messenger.com/t/195174930336617', '_blank');
  }

  goToServiceDetails(nameService: string): void {
    this.router.navigate(['/service-page', nameService]);
  }
}

class service_box {
  url: string;
  name: string;

  public constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }
}
