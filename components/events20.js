import React from 'react'
function handle(){
  console.log("hi");
}
function Click(){
  return(
    <div>
    <p onMouseOver={  function(){console.log("hi")}}>hello</p>
      <button onClick={handle}>click it</button>
    </div>
  )
}
export default Click
