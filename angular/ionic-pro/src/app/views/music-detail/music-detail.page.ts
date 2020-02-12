import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.page.html',
  styleUrls: ['./music-detail.page.scss'],
})
export class MusicDetailPage implements OnInit {
        public name:string;
        public img:any;
        public des:any;
  constructor(public http:HttpClient,public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      var id=res['id'];
      this.http.get(`http://192.168.14.15:5000/playlist/detail?id=${id}`).subscribe(res=>{
       this.name=res['playlist'].name;
        this.img=res['playlist'].coverImgUrl;
        this.des=res['playlist'].description; 
    })
  })
  }
}
