import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
      public subjects:[];
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url="https://douban-api.now.sh/v2/movie/in_theaters";
    this.http.get(url).subscribe(res=>{
      this.subjects=res['subjects'];
    })
  }

}
