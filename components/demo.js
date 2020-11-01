import React from 'react'
import Demo1 from './demo1'
class Newclass extends React.Component{
    constructor(){
      super();
      this.state={
        Name:"niharika"
      }
      this.handle=this.handle.bind(this)//this will bind the handle function so we can use set state in it
    }

    /////create a function and bind in the constructor
    //by using setstate we are changing name to sharma which was in state
     handle(){
      this.setState(
        State=>({
          Name:"sharma"
        })
      );
    }

    render(){
      return(
      <div>
        <p>{this.state.Name}</p>
        <Demo1 handle={this.handle}/>
      </div>
      )
    }

}
export default Newclass
