import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public arrList:Object[]=[];
  public value:string="";
  constructor() { }

  ngOnInit() {
  }
  handleEnter(){
    if(this.value!==""){
      this.arrList.push({name:this.value,checked:false});
      this.value=""
    }
  }
  handleDelete(index:number){
    this.arrList.splice(index,1)
  }
  sum(){
    //使用过滤器筛选满足条件的值
    var sum =this.arrList.filter(item=>item['checked']);
    return sum.length
  }
}
