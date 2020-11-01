import React ,{Component} from 'react'

class StateApp extends Component{
  constructor(){
    super()
    this.state ={
      name:"muskan",
      login:false
    }
  }
  render(){
    let logvalue;
    if(this.state.login){
      logvalue="online"
    }
    else{
      logvalue="offline"
    }
    return(
    <div>{this.state.name} is {logvalue}</div>
    )
  }
}
export default StateApp
