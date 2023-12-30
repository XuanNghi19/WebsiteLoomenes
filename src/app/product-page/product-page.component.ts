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

  updatePagedProductList(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.productList.length
    );
    this.pagedProductList = this.productList.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number, element1: any, element2: any): void {
    element1.classList.add('active');
    element2.classList.remove('active');
    this.currentPage = pageNumber;
    this.updatePagedProductList();
  }

  onSortProduct() {
    this.productList.sort((a, b) => a.price - b.price);
    this.updatePagedProductList();
  }

  ngOnInit(): void {
    this.updatePagedProductList();
  }
}
