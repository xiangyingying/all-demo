import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
    @Input() subjects:any;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  handleDetail(id:number){
    this.router.navigate([`/film/${id}`])
  }
}
