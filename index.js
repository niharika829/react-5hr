import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ShopApp from './components/mosh/app';
import MainCount from './components/mosh/maincount';
import Counter from './components/mosh/counter';
import MyApp from './components/MyApp1';
import MyDate from './components/DateGreetings4';
import Todo from './components/Todolist5';
import './components/style.css';
import Routing from './components/routing/app';
import Meme from './components/meme/main.js';
import Form from './components/form26';
import Smart from './components/smartdumbcomponents27';
import Fetch from './components/fetchapi25';
import Log from './components/loginout24';
import MainCond from './components/maincondition22.js';
import Contacts from './components/ContactMaster7.js';
import Mapped from './components/MappedContactList10';
import Second from './components/SecondWayMappedContactList12';
import TodoMain from './components/TodoMain14';
import ClassMain from './components/ClassComponenMaster16';
import StateApp from './components/State18';
import TodoMainApp from './components/TodoMainWithState19';
import Event from './components/events20';
import Increment from './components/increment21';
import Demo from './components/demo';
import NewApp from './components/crashcourse/app';
import Http from './components/crashcourse_http/app';
import Reactrouter from './components/reactclass/app.js';
import Boot from './components/bootreact/app.js';
import Login from './components/validation/app';
import FetchApiReact from './components/fetchapi/app';
import FetchApi from './components/fetchapi25';
import Mic from './components/ReactMic/app';
import Auth from './components/auth/app';
import { Auth0Provider } from '@auth0/auth0-react';
import Hooks from './components/hooks/app';
import Assignmnethook from './components/hookassignmnet';
import Portfolio from './components/portfolio/app';
import Baffle from './components/baffle';
//process can be used tio access all the env variables
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// console.log(domain);
////////////////////////////////////////////////////////////////////////////
// function MyApp(){
//   return(
//     <div>
//     <ul>
//       <li>neha</li>
//     </ul>
//     <ol>
//       <li>neha</li>
//     </ol>
//     </div>
//   )
// }
////////////////////////////////////////////////////////////////////////////
//ReactDOM.render(<MyApp />, document.getElementById("root"));
////////////////////////////////////////////////////////////////////////////
//ReactDOM.render(<MyDate />, document.getElementById("root"));
//////////////////////////////////////////////////////////////////////////
//ReactDOM.render(<Todo />, document.getElementById("root"));
////////////////////////////////////////////////////////////////////////
//ReactDOM.render(<Contacts />, document.getElementById("root"));
///////////////////////////////////////////////////////////////////////
//ReactDOM.render(<Mapped />, document.getElementById("root"));
//////////////////////////////////////////////////////////////////////
//ReactDOM.render(<Second />, document.getElementById("root"));
/////////////////////////////////////////////////////////////////////
//ReactDOM.render(<TodoMain />, document.getElementById('root'));
////////////////////////////////////////////////////////////////////
//ReactDOM.render(<ClassMain />, document.getElementById("root"));
//////////////////////////////////////////////////////////////////
//ReactDOM.render(<StateApp />, document.getElementById("root"));
////////////////////////////////////////////////////////////////
//ReactDOM.render(<TodoMainApp />, document.getElementById("root"));
///////////////////////////////////////////////////////////////
//ReactDOM.render(<Event />, document.getElementById("root"));
/////////////////////////////////////////////////////////////
//ReactDOM.render(<Increment />, document.getElementById("root"));
//ReactDOM.render(<Demo />, document.getElementById("root"));
//ReactDOM.render(<MainCond />, document.getElementById("root"));
//ReactDOM.render(<Log />, document.getElementById("root"));
//ReactDOM.render(<Fetch />, document.getElementById("root"));
//ReactDOM.render(<Form />, document.getElementById("root"));
//ReactDOM.render(<Smart />, document.getElementById("root"));
//ReactDOM.render(<Meme />, document.getElementById("root"));
//ReactDOM.render(<NewApp />, document.getElementById("root"));
//ReactDOM.render(<Http />, document.getElementById("root"));
//ReactDOM.render(<Counter />, document.getElementById("root"));
//ReactDOM.render(<MainCount />, document.getElementById("root"));
//ReactDOM.render(<ShopApp />, document.getElementById("root"));
//ReactDOM.render(<Routing />, document.getElementById("root"));
//ReactDOM.render(<Reactrouter />, document.getElementById('root'));
// ReactDOM.render(
// 	<Auth0Provider
// 		domain="dev-q0v6x1cb.us.auth0.com"
// 		clientId="VEZrqT3zxkD2gu3sPEZZBRSdNpHUOBnE"
// 		redirectUri={window.location.origin}
// 	>
// 		<Boot />
// 	</Auth0Provider>,
// 	document.getElementById('root')
// );
//ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<FetchApiReact />, document.getElementById('root'));
//ReactDOM.render(<Mic />, document.getElementById("root"));
// ReactDOM.render(
// 	<Auth0Provider
// 		domain="dev-q0v6x1cb.us.auth0.com"
// 		clientId="VEZrqT3zxkD2gu3sPEZZBRSdNpHUOBnE"
// 		redirectUri={window.location.origin}
// 	>
// 		<Auth />
// 	</Auth0Provider>,
// 	document.getElementById('root')
// );
//ReactDOM.render(<Hooks />, document.getElementById('root'));
//ReactDOM.render(<Assignmnethook />, document.getElementById('root'));
//ReactDOM.render(<Portfolio />, document.getElementById('root'));
//ReactDOM.render(<Baffle />, document.getElementById('root'));
