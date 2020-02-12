import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    public defaultCity:string="武汉"

    constructor() { }
    getCity(){
      if(localStorage.getItem("city")){
        this.defaultCity=localStorage.getItem("city")
      }
      return this.defaultCity;
    }
  changeCity(value:string){
    this.defaultCity=value
    localStorage.setItem("city",value)
  }
}
