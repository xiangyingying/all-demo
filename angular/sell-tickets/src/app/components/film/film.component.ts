import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
      public data:{};
      public title:any;
      public img:any;
      public genres:[];
      public mainland_pubdate:any;
      public countries:any;
      public summary:any;
      public durations:any;
      public casts:[];
      public clips:[];
  constructor(public http:HttpClient,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      var id=res.id;
      var url=`https://douban-api.uieee.com/v2/movie/subject/${id}`;
      this.http.get(url).subscribe(res=>{
        this.data=res;
        this.title=res['title'];
        this.img=res['images'].small;
        this.genres=res['genres'];
        this.mainland_pubdate=res['mainland_pubdate'];
        this.countries=res['countries'];
        this.durations=res['durations']
        this.summary=res['summary'];
        this.casts=res['casts'];
        this.clips=res['photos'];
      }) 
    })  
  }
  handleBack(){
    this.router.navigate(['/films/nowPlaying'])
  }
}
