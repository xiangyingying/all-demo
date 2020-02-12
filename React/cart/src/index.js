import React from 'react';
import ReactDOM from 'react-dom';
import Carts from './Carts';
import axios from 'axios'
import 'antd/dist/antd.css'
React.Component.prototype.axios=axios
ReactDOM.render(<Carts />, document.getElementById('root'));
