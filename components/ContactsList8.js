import React from 'react'
function ContactList(props){
  return(
    <div>
    <img style={{display: props.contact.imgURL? "block" : "none"}} src={props.contact.imgURL} />
      <p style={{color: !props.contact.imgURL && "red"}}>{props.contact.name}</p>
    </div>
  )
}

export default ContactList;
