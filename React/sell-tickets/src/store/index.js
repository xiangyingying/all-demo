import {createStore} from 'redux'   
import reducer from './reducer'     
let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    //配置redux调式工具
export default store; 