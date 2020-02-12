import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    public data:any;
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      var id=res.id
      var url=`https://douban-api.uieee.com/v2/movie/subject/${id}`
      this.http.get(url).subscribe(res=>{
        this.data=res
      })
    })
  }

}
