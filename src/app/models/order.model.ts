export class Order {
  orderNumber : string;
  orderDate : string;
  status : string
  
  constructor(n:string, d:string, s:string){
    this.orderNumber = n;
    this.orderDate = d;
    this.status = s;
  }
}