import React from 'react';

import MyHeader from './MyHeader2';
import MyFooter from './MyFooter3';
function MyApp(){
  const first="niharika";
  const last="sharma";
  return(
    <div>
    <MyHeader />
    <ul>
      <li>neha {first + " " + last}</li>
    </ul>
    <ol>
      <li>neha { `${first} ${last}`}</li>
    </ol>
    <MyFooter />
    </div>
  )
}
export default MyApp;
