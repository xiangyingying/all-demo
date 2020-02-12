import React, { Component } from 'react';
import './App.css'
import {Input,Checkbox} from 'antd'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:"",
      arrList:[],
      checked:false,
      id:1
    }
  }
  render() {
    return (
      <div>
            <div className="nav">
                <div className="nav-title center">
                  <span>ToDoList</span>
                  <Input type="text" placeholder="添加ToDo" size="small" value={this.state.keyword}
                  onPressEnter={this.addKey.bind(this,this.state.keyword)} onChange={this.addChange} />
                </div>
            </div>
            <div className="to-container">
              <div className="content center">
                <div className="title">
                  <p>正在进行</p>
                      <span className="num">{this.state.arrList.length-this.sum()}</span>
                </div>
                <div className="list-f">
                  {this.state.arrList.map((item,index)=>{
                    return (<div key={index} style={{display:(!item.checked)?"block":"none"}} className="item">
                      <Checkbox checked={item.checked}  onChange={this.handleFinish.bind(this,item.id)}></Checkbox>
                      <span>{item.name}</span>
                      <span className="circle" onClick={this.handleDelete.bind(this,item.id)}><span className="min-circle">-</span></span>
                    </div>)
                  })}
                    
                </div>
                <div className="title">
                  <p>已经完成</p>
                     <span className="num">{this.sum()}</span>
                </div>     
                <div className="list-s" >
                  {this.state.arrList.map((item,index)=>{
                    return (<div key={index} style={{display:(item.checked)?"block":"none"}} className="item">
                      <Checkbox checked={item.checked}  onChange={this.handleFinish.bind(this,item.id)}></Checkbox>
                      <span>{item.name}</span>
                      <span className="circle" onClick={this.handleDelete.bind(this,item.id)}><span className="min-circle">-</span></span>
                    </div>)
                  })}
                </div>
              </div>
            </div>
          </div>
      );
    }
    /* 改变keyword的值 */
    addChange=(e)=>{
      this.setState({
          keyword:e.target.value
      })
    }
    /* 回车键添加数组 */
    addKey=(e)=>{
      if(e!=""){
        var arrList=this.state.arrList;
        var keyword=e;
        var obj={};
        var id=this.state.id;
        obj.name=keyword;
        obj.checked=this.state.checked;
        obj.id=id
        id=id+1
        arrList.push(obj)
        this.setState({
          arrList,
          id
        })
      }
    }
    handleFinish=(id)=>{
        var arrList=this.state.arrList;
        /* 如果点击的id==当前id,则改变checked */
       arrList.forEach(item=>{
          if(item.id==id){
            item.checked=!item.checked
          }
        })
        this.setState({
          arrList
        })
    }
    handleDelete=(id)=>{
      var arrList=this.state.arrList;
      var index=arrList.findIndex(item=>{
        if(item.id==id){
          return true
        }
      })
      arrList.splice(index,1)
      this.setState({
        arrList
      })
    }
    sum(){
      /* item.checked默认为false,在未完成时的状态一直为false,长度一直为0,直到点击事件,checked为true，长度开始累加 */
      var sum=this.state.arrList.filter(item=>item.checked);
      return sum.length;
    }
    /* todoNumber() {
      var arrList = this.state.arrList
      var todolist = arrList.filter(item => {
        if (!item.checked) {
          return true
        }
      })
      return todolist.length
    } */
   /*  doneNumber() {
      var arrList = this.state.arrList
      var donelist = arrList.filter(item => {
        if (item.checked) {
          return true
        }
      })
      return donelist.length
    } */
}

export default App;