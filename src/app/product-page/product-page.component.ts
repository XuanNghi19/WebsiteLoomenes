import { Component, OnInit } from '@angular/core';
import { PRODUCT_LIST } from 'src/constants';

@Component({
  selector: 'Loomenes-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  productList: any[] = PRODUCT_LIST;
  pagedProductList: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;

  // Hàm này cập nhật danh sách sản phẩm trên trang hiện tại
  updatePagedProductList(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.productList.length
    );
    this.pagedProductList = this.productList.slice(startIndex, endIndex);
  }

  // Hàm này được gọi khi thay đổi trang
  onPageChange(pageNumber: number, element1: any, element2: any): void {
    element1.classList.add('active');
    element2.classList.remove('active');

    this.currentPage = pageNumber;
    this.updatePagedProductList();
  }

  // Hàm này được gọi khi component được khởi tạo
  ngOnInit(): void {
    // Khởi tạo danh sách sản phẩm và danh sách sản phẩm trên trang đầu tiên
    // this.productList = ...; // Gán danh sách sản phẩm của bạn vào đây
    this.updatePagedProductList();
  }
}
