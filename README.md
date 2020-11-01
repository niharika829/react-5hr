# react-5hr

# npx create-react-app my-app
////////////////////////////////////////////////////////////////////////////////////////////////////////////

# ES7 React/Redux/GraphQL/React-Native snippets


imp→	import moduleName from 'module'
imr→	import React from 'react'
imrd→	import ReactDOM from 'react-dom'
imrc→	import React, { Component } from 'react'
imrr→	import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

est→	this.state = { }
sst→	this.setState({ })

cdm→	componentDidMount = () => { }
ren→	render() { return( ) }

clo→	console.log("object", object)


rce-> 
import React, { Component } from 'react'
export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
export default $1


rfce-> 
import React from 'react'
function $1() {
  return <div>$0</div>
}
export default $1


rafce
import React from 'react'
const $1 = () => {
  return <div>$0</div>
}
export default $1




//////////////////////////////////////////////////////////////////////////////////////////////////////////
# redirect->

import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
class Redirection extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
		};
	}
	setRedirect = () => {
		this.setState({
			redirect: true,
		});
	};
	render() {
		return (
			<React.Fragment>
				<Router>
					{this.state.redirect ? <Redirect push to="/products" /> : null}
					<button onClick={this.setRedirect}>click</button>
				</Router>
			</React.Fragment>
		);
	}
}
export default Redirection;





////////////////////////////////////////////////////////////////////////////////////
# image:-

import {Logo} from "./image/logo.jpg"
 <img src={user.picture} alt={user.name} />

////////////////////////////////////////////////////////////////////////////////////
# routing:-

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() { 
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cards" component={Cards} />
          <Route path="/profile/:username?" component={Profile} />
		  <Route path="/" render={(props) => <Mycom {...props} todo={this.handle} />}></Route>
		  <Route path="/projects" render={(props) => <Projects {...props} title={Posts} skillset={Skills} />}
					/>
          <Route path="*" component={() => "404 not found"} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
      <React.Fragment>
       <p>hello</p>
      </React.Fragment>
  );
};
export default App;



import { Link } from "react-router-dom";
			<Link to="/cards">
              <li className="nav-item nav-link">cards</li>
            </Link>
            <Link to={`/profile/${user}`}>
              <li className="nav-item nav-link">user profile</li>
			</Link>


///////////////////////////////////////////////////////////////////////////////////

# mapping:-

posts.map((post) => (
            <div>
              NAME:-<b>{post.name}</b> <br />
            </div>
          ))
		  
		  
		  

///////////////////////////////////////////////////////////////////////////////////
# axios:-

 Fetchposts = async () => {
    const { data: posts } = await axios.get(Config.urlendpoint);

    this.setState({ posts });
  };
  
  
  
  
  axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
      .then((res) => this.setState({ todos: res.data }));
	  
	  
	  
	  
 /////////////////////////////////////////////////////////////////////////////////////	  
# fetch:-

fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({ allMemeImgs: memes });
      });
 /////////////////////////////////////////////////////////////////////////////////////
 # style
 
 style={btnStyle}
 style={this.styles()}
 
 
 
 
 
 /////////////////////////////////////////////////////////////////////////////////////
 # handle,delete,submit
 
 	handle = (id) => {
		this.setState({
			todos: this.state.todos.map((newtodo) => {
				if (newtodo.id === id) {
					newtodo.completed = !newtodo.completed;
				}
				return newtodo;
			}),
		});
	};
	del = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id != id)],
		});
	};
	submit(title) {
		const newtodos = {
			id: uuid(),
			title: title,
			completed: false,
		};
		console.log(title);
		this.setState({ todos: [...this.state.todos, newtodos] });
	}
