import React from 'react';
import ContactList from './MappedContacts11'
import MapArray from './MapArray9'
function MapppedContactMaster()
{
    const contactcomponent = MapArray.map(
    function(lists){
      return(
      <ContactList
          key={lists.id}
          name={lists.name}
          imgURL={lists.imgURL}
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
export default MapppedContactMaster
