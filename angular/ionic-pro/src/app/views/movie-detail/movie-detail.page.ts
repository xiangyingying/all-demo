import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  constructor(public http:HttpClient,public route:ActivatedRoute) { } 
     public title:any;
      public year:number;
      public img:string;
      public summary:string;
  ngOnInit() {
    this.route.params.subscribe(res=>{
      var id=res['id']
      this.http.get(`https://douban-api.uieee.com/v2/movie/subject/${id}`).subscribe(res=>{
      console.log(res)
      this.title=res['title'];
      this.year=res['year'];
      this.img=res['images'].small;
      this.summary=res['summary'];
      })
    })
  }

}
