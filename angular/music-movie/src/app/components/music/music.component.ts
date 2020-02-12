import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
    public playlists:any;
  constructor( public http:HttpClient,private router:Router) { }

  ngOnInit() {
    var url:string="http://192.168.14.15:5000/top/playlist?cat=华语";
    this.http.get(url).subscribe(res=>{
      this.playlists=res['playlists']
    })
  }
  handleDetail(id){
    console.log(id)
    let NavigationExtras:NavigationExtras={
      queryParams:{
        "id":id
      }
    }
    this.router.navigate(['/musicDetail'],NavigationExtras)
  }

}
