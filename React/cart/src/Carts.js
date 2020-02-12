import React, { Component } from 'react';
import './Carts.css'
import { Checkbox,InputNumber,Button} from 'antd';
class Carts extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            minSum:"",
            checkAll:true
        }
    }
    render() {
        return (
            <div className="center container">
            <h2>购物车</h2>   
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>全选<Checkbox checked={this.state.checkAll} onChange={this.handleCheckAll}></Checkbox></th>
                        <th>商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>    
                    {this.state.products.map((item,index)=>{
                        return(<tr key={item.id}>
                        <td>
                            <Checkbox checked={item.isSelected}  onChange={this.selectCheck.bind(this,item.id)}></Checkbox>
                        </td>
                        <td className="produce">
                            <img src={item.productCover} />
                            <p className="title">{item.productName}</p>
                        </td>
                        <td>
                            <div className="price">{item.productPrice}</div>
                        </td>
                        <td>
                            <InputNumber size="small" min={1} max={10} defaultValue={item.productCount} onChange={this.onChange.bind(this,item)} />
                        </td>
                        <td>
                            <div>${this.bill(item.productPrice, item.productCount)}</div>
                        </td>
                        <td>
                            <Button type="danger" onClick={this.handleDelete.bind(this,index)}>删除</Button>
                        </td>
                        </tr>)
                        })}                   
                        </tbody>          
                    </table>
                        <p className="sum">总价：${this.sum()}</p>
            </div>
        );
    } 
    componentDidMount() {
        this.axios.get('http://yapi.demo.qunar.com/mock/34830/carts').then(res=>{
            this.setState({
                products:res.data
            })
        })
    }
    bill(a, b) {
        return (a * b).toFixed(2)
      }
    onChange=(item,value)=>{
        var id=item.id
        var products=this.state.products;
        /* 遍历使对应的数量值根据点击事件变化 */
        products.forEach(item=>{
            if(item.id==id){
                item.productCount=value
            }
        })
        this.setState({
            products
        })
    }
    sum(){
        var total=0;
        var products=this.state.products;
        products.forEach(item=>{
            total=item.productPrice*item.productCount+total;
        })
        return total.toFixed(2)
    }
    handleCheckAll=(e)=>{
       var products=this.state.products
       /* 将全选的checked状态赋值给每个单选的checked */
         products.forEach(item=>item.isSelected=e.target.checked)
         this.setState({
             checkAll:!this.state.checkAll,
             products
         })
    }
    selectCheck=(id,e)=>{
        console.log(e.target.checked)
            var products = this.state.products;
            /* 先做一次遍历，改变点击每个对应的checked */
            products.forEach(item => {
            if (item.id == id) {
                item.isSelected = e.target.checked
            }
            })
            /* 遍历出每个checked，满足checked都为true或者false时，付给chekcAll,checkAll的checked状态改变 */
            var checkAll = products.every(item => item.isSelected);
            this.setState({
            products,
            checkAll
            })
        }
        handleDelete=(index)=>{
            var products=this.state.products;
            products.splice(index,1);
            this.setState({
                products
            })
        }
    }
export default Carts;