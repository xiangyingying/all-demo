import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products:any;
   checked = false;
  public checkAll:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string="http://yapi.demo.qunar.com/mock/34830/carts";
    this.http.get(url).subscribe(res=>{
      this.products=res
      this.products.forEach(item=>item.isSelected=this.checkAll)
    })
  }
  bill(a,b){
    return (a*b).toFixed(2)
  }
  selectAll(){
    this.products.forEach(item=>item.isSelected=this.checkAll)
  }
  selected(){
    this.checkAll= this.products.every(item=>item.isSelected);
  }
  sum(){
    var total=0;
    this.products.forEach(item=>{
        total=item.productCount*item.productPrice+total;
    })
    return total.toFixed(2)
   }
   handleDelete(index:number){
     this.products.splice(index,1)
   }
}
