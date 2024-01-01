import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebsiteLoomenes';
  
}

export class ServiceObj {
  urlImg: string;
  name: string;
  describe: string[];
  price: number;
  public constructor(urlImg: string, name: string, describe: string[], price: number){
    this.name =name;
    this.urlImg = urlImg;
    this.describe= describe;
    this.price = price;
  }
}

export class SpecialOffer {
  name: string;
  describe: string;
  discount: number;
  deadline: string;

  public constructor(name: string, describe: string, discount: number, deadline: string){
    this.name = name;
    this.describe = describe;
    this.discount = discount;
    this.deadline = deadline;
  }
}