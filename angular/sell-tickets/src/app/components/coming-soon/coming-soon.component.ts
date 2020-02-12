import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
      public subjects:[];
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url='https://douban-api.now.sh/v2/movie/coming_soon';
    this.http.get(url).subscribe(res=>{
        this.subjects=res['subjects']
    })
  }

}
