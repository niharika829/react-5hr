import React from 'react';
import ContactList from './ContactsList8'

function ContactMaster()
{
  return(
    <div>
    <ContactList
    contact={{name:"niharika sharma"}}
    />
    <ContactList
    contact={{name:"niharika sharma",imgURL:"http://placekitten.com/300/400"}}
    />
    <ContactList
    contact={{name:"MUSKAN sharma",imgURL:"http://placekitten.com/300/400"}}
    />
    <ContactList
    contact={{name:"PRATHAM sharma",imgURL:"http://placekitten.com/300/400"}}
    />
    </div>
    // <div>//in ContactList8 remove propes.contact.property_name instead write props.property_name
    // <ContactList
    // name="niharika sharma"
    // imgURL="#"
    // />
    // <ContactList
    // name="MUSKAN sharma"
    // imgURL="#"
    // />
    // <ContactList
    // name="PRATHAM sharma"
    // imgURL="#"
    // />
    // </div>
  )
}
export default ContactMaster
