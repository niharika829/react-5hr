import React from 'react';
import ContactList from './ContactsList8'
import MapArray from './MapArray9'
function MapppedContact()
{
    const contactcomponent = MapArray.map(
    function(lists){
      return(
      <ContactList
          key={lists.id}
          contact={lists}
        />
      )
    }
  )
  return(
    <div>
      {contactcomponent}
    </div>
  )
}
export default MapppedContact
