import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceObj, SpecialOffer } from '../app.component';


@Component({
  selector: 'Loomenes-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements AfterViewInit{
  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;
  @ViewChild('dot3') dot3!: ElementRef;
  ngAfterViewInit(): void {
    const dot_1 = this.dot1.nativeElement as HTMLElement;
    const dot_2 = this.dot2.nativeElement as HTMLElement;
    const dot_3 = this.dot3.nativeElement as HTMLElement;

    function resetDot(idx: number): void{
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
    }

    this.getOffer = (idx: number): void => {
      this.slIdxOffer = idx;
      resetDot(idx);
    };

    this.nextOffer = (): void => {
      if(this.slIdxOffer < this.listSpecialOffers.length - 1){
        this.slIdxOffer++;
        resetDot(this.slIdxOffer);
      }
    }

    this.prevOffer = (): void => {
      if(this.slIdxOffer > 0){
        this.slIdxOffer--;
        resetDot(this.slIdxOffer);
      }
    }

    this.onTouchStart = (event: TouchEvent) => {
      this.lastXOffer = event.changedTouches[0].clientX;
    }
  
    this.onTouchEnd = (event: TouchEvent) => {

      const deltaX = this.lastXOffer - event.changedTouches[0].clientX;
      if(deltaX > 0 && this.slIdxOffer < 2){
        this.slIdxOffer++;
        this.getOffer(this.slIdxOffer);
      } else if(deltaX < 0 && this.slIdxOffer > 0){
        this.slIdxOffer--;
        this.getOffer(this.slIdxOffer);
      }
      console.log(deltaX);
      this.lastXOffer = 0;
    }
  }
  
  imgBanner = '/assets/services/serviceBanner.png';
  imgBannerServiceMobile = '/assets/services/imgBannerServiceMobile.svg';
  introduceImg: string[] = [
    '/assets/services/kho hàng.svg',
    '/assets/services/mác giá.svg',
    '/assets/services/vận chuyển.svg',
    '/assets/services/clock.svg',
  ];
  
  stackService1: ServiceObj[] = [
    new ServiceObj(
      "/assets/services/serviceImg/Vệ sinh chuyên sâu.png",
      "Vệ sinh chuyên sâu",
      [
        "Vệ sinh giày bằng tay.",
        "Sử dụng dung dịch chuyên dụng cho từng loại vết bẩn và chất liệu.",
        "Chiếu tia UV diệt khuẩn, khử mùi."
      ],
      100000
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Vệ sinh nâng cao.png",
      "Vệ sinh nâng cao",
      [
        "Áp dụng cho giày bị nấm mốc/ố vàng. Vệ sinh giày bằng tay.",
        "Sử dụng dung dịch chuyên dụng để tẩy nấm mốc/ố vàng.",
        "Làm thêm 1-2 lượt hóa chất nữa nếu giày vẫn chưa hết nấm  mốc/ố vàng.",
        "Chiếu tia UV diệt khuẩn, khử mùi.",
      ],
      170000
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Sửa đóng đế giày âu.png",
      "Sửa đóng đế giày âu",
      [
        "Dịch vụ được thiết kế dành riêng cho các đôi giày da Âu/Anh đã bị mòn hoặc hỏng đế giày.",
        "Anh đã bị mòn hoặc hỏng đế giày.",
        "Đế giày mới làm từ chất liệu cao su tự nhiên.",
        "Quy trình đóng đế đảm bảo kỹ thuật, không làm biến dạng giày.",
      ],
      100000
    )
  ];
  stackService2: ServiceObj[] =[
    new ServiceObj(
      "/assets/services/serviceImg/Custom giày.svg",
      "Custom giày",
      [
        "Khả năng tùy chỉnh không giới hạn.",
        "Sử dụng công nghệ in ấn hiện đại.",
        "Thực hiện thêm 1-2 lần in ấn nếu khách hàng không hài lòng với kết quả.",
        "Bảo vệ giày sau khi in ấn.",
      ],
      0
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Sơn giày.svg",
      "Sơn giày",
      [
        "Áp dụng cho giày cần tân trang.",
        "Sử dụng sơn chuyên dụng cho giày.",
        "Thực hiện thêm 1-2 lớp sơn nếu màu sắc chưa đạt yêu cầu.",
        "Phủ lớp bảo vệ sau khi sơn.",
      ],
      0
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Sửa đế giày.svg",
      "Sửa đế giày",
      [
        "Chúng tôi giúp khắc phục các vấn đề liên quan đến đế giày, từ đế bị mòn, hỏng hóc đến đế bị trơn trượt.",
        "sử dụng vật liệu chất lượng cao để sửa đế giày, đảm bảo độ bền và thoải mái cho người dùng.",
        "Kiểm tra chất lượng sau khi sửa.",
      ],
      0
    ),
  ];

  stackService3: ServiceObj[] =[
    new ServiceObj(
      "/assets/services/serviceImg/Phủ nano chống nước giày.svg",
      "Phủ nano chống nước giày",
      [
        "Áp dụng cho giày cần chống nước.",
        "Sử dụng công nghệ nano hiện đại.",
        "Thực hiện đa lớp phủ.",
        "Kiểm tra chất lượng sau khi phủ.",
      ],
      300000
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Chăm sóc giày da.svg",
      "Chăm sóc giày da",
      [
        "Giúp bảo vệ và duy trì độ mới lâu dài cho đôi giày da yêu quý của bạn.",
        "Sử dụng các sản phẩm chăm sóc da chất lượng cao, được thiết kế đặc biệt để làm sạch, dưỡng ẩm và bảo vệ da.",
        "Kiểm tra chất lượng sau khi phủ.",
      ],
      250000
    ),
    new ServiceObj(
      "/assets/services/serviceImg/Tảy ố vàng giày.svg",
      "Tảy ố vàng giày",
      [
        "Giúp loại bỏ các vết ố vàng, mang lại vẻ mới cho đôi giày của bạn.",
        "Sử dụng dung dịch tẩy chuyên dụng, được thiết kế đặc biệt để loại bỏ các vết ố vàng trên giày.",
        "Chúng tôi sẽ kiểm tra chất lượng để đảm bảo rằng vết ố vàng đã được loại bỏ hoàn toàn.",
      ],
      150000
    ),
  ];

  stackServices = [
    this.stackService1,
    this.stackService2,
    this.stackService3,
  ];
  index = 0;
  startIndex = true;
  lastIndex = false;

  listSpecialOffers: SpecialOffer[] = [
    new SpecialOffer(
      "Ưu đãi cuối năm",
      "Vocher giảm giá 100.000đ cho tất cả dịch vụ cho 50 người đầu tiên đăng kí",
      100000,
      "*Hạn: 25/12/2023 đến 7/02/2024",
    ),
    new SpecialOffer(
      "Lì xì năm mới",
      "Vocher giảm giá 99.999đ cho tất cả dịch vụ cho 9 người đầu tiên đăng kí",
      99999,
      "*Hạn: 30/12/2023 đến 01/02/2024",
    ),
    new SpecialOffer(
      "Ưu đãi thường niên",
      "Vocher giảm giá 50.000đ cho tất cả dịch vụ cho 100 người đầu tiên đăng kí",
      50000,
      "*Hạn: 27/12/2023 đến 08/01/2024",
    ),
  ];
  slIdxOffer = 0;
  lastXOffer = 0;
  

  onTouchStart(event: TouchEvent){
    this.onTouchStart(event);
  }

  onTouchEnd(event: TouchEvent){
    this.onTouchEnd(event);
  }

  getOffer(idx: number): void {
    this.getOffer(idx);
  }

  nextOffer(){
    this.nextOffer();
  }

  prevOffer(){
    this.prevOffer();
  }

  chossePage(index: number): void {
    this.index = index;
    if(index == 0 ){
      this.startIndex = true;
    } else {
      this.startIndex = false;
    }

    if(index == this.stackServices.length - 1 ){
      this.lastIndex = true;
    } else {
      this.lastIndex = false;
    }
  }

  nextPage(): void {
    if(this.index < this.stackServices.length - 1){
      this.index++;
      this.startIndex = false;
      if(this.index == this.stackServices.length - 1 ){
        this.lastIndex = true;
      } else {
        this.lastIndex = false;
      }
    }
  }
  prevPage(): void {
    if(this.index > 0){
      this.index--;
      this.lastIndex = false;
      if(this.index == 0 ){
        this.startIndex = true;
      } else {
        this.startIndex = false;
      }
    }
  }
}


