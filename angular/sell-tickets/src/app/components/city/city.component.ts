import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
    public cities:[];
    public hotCities:[];
  constructor(public http:HttpClient,public common:CommonService,public router:Router) { }

  ngOnInit() {
      var url='http://yapi.demo.qunar.com/mock/43104/film';
      this.http.get(url).subscribe(res=>{
        this.hotCities=res['data'].hotCities;
        this.cities=res['data'].cities;
      })
      
  }
  handleChangeCity(item:string){
    this.common.changeCity(item)
    this.router.navigate(['/films'])
  }
}
