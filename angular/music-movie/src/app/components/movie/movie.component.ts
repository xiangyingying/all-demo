import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    public subjects:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string='https://douban.uieee.com/v2/movie/top250';
    this.http.get(url).subscribe(res=>{
      this.subjects=res['subjects']
    })
  }

}
