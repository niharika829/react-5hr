import React from 'react'
function MappedContact(props){
  return(
    <div>
    <img style={{display: props.imgURL? "block" : "none"}} src={props.imgURL} />
      <p style={{color: !props.imgURL && "red"}}>{props.name}</p>
    </div>
  )
}

export default MappedContact;
