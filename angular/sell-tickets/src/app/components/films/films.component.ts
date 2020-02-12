import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
    public banners:any=[
     '../../../assets/banner_1.jpg',
     '../../../assets/banner_2.jpg'
    ]
    public city:any;
  constructor(public common:CommonService,private router:Router) { }

  ngOnInit() {
    this.city=this.common.getCity()
  }
  handleCity(){
    this.router.navigate(['/city'])
  }
}
