import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public subjects:[];
  constructor(public http:HttpClient) {}
  ngOnInit(){
    var url:string='https://douban.uieee.com/v2/movie/top250';
    this.http.get(url).subscribe(res=>{
      this.subjects=res['subjects']
    })
  }
    

}
