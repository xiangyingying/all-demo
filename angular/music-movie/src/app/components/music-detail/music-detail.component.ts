import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss']
})
export class MusicDetailComponent implements OnInit {
  public playlist:any;
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
     var id=res.id;
     var url:string=`http://192.168.14.15:5000/playlist/detail?id=${id}`
     this.http.get(url).subscribe(res=>{
        this.playlist=res['playlist']
    })
    })
  }

}
