import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './routes/navbar';
import Products from './routes/products';
import Posts from './routes/posts';
import Home from './routes/home';
import Dashboard from './routes/admin/dashboard';
import ProductDetails from './routes/productDetails';
import NotFound from './routes/notFound';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Router>
						<Switch>
							<Route path="/products/:id" component={ProductDetails} />
							<Route path="/products" component={Products} />
							{/*render={(props) => <Products data="DummyData" {...props}/>*/}

							<Route path="/posts/:year?/:month?" component={Posts} />
							<Route path="/admin" component={Dashboard} />
							<Route path="/not-found" component={NotFound} />
							<Route path="/" exact component={Home} />
							<Redirect to="/not-found" />
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
