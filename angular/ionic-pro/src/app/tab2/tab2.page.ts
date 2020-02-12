import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public playlists:any;
  constructor(public http:HttpClient) {}
  ngOnInit(){
    var url:string="http://192.168.14.15:5000/top/playlist?cat=华语";
    this.http.get(url).subscribe(res=>{
      this.playlists=res['playlists']
    })
  }
}
