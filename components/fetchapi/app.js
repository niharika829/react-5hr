import React, { Component } from 'react';
//import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from './config/config.json';
import http from './utils/httpService';
const urlendpoint = 'https://jsonplaceholder.typicode.com/posts';
class App extends Component {
	state = {
		posts: [],
		isOpen: false,
	};
	async componentDidMount() {
		console.clear();
		const { data: posts } = await http.get('https://jsonplaceholder.typicode.com/posts');
		//promise.then((response) => console.log(response.data));
		//await:- always use await with asynch to tell the function in asynchronous we might habe to wait
		//asynch

		this.setState({ posts });
	}
	handleAdd = async () => {
		//console.log("Add");
		const obj = { title: 'react ', body: 'good' };
		//create resource
		const { data: post } = await http.post(Config.urlendpoint, obj);
		const posts = [post, ...this.state.posts];
		//we want our post to be on first then the rest
		this.setState({ posts, isOpen: true });
		const val = this.state.isOpen;
		if (val) {
			toast.success('added');
		}
	};

	handleUpdate = async (post) => {
		console.log('Update', post);
		post.title = 'updated title';
		//const { data } = await http.put(urlendpoint + "/new/" + post.id);//to check error
		const { data } = await http.put(urlendpoint + '/' + post.id);
		console.log(data);
		const posts = [...this.state.posts];
		const index = posts.indexOf(post);
		posts[index] = { ...post };
		this.setState({ posts });
		toast.info('updated');
	};

	handleDelete = async (post) => {
		console.log('Delete', post);

		//turn your internet off to check error
		const temp = await http.delete(urlendpoint + '/' + post.id);

		const posts = this.state.posts.filter((p) => p.id != post.id);
		this.setState({ posts });
		//change the url so we can see the error
		toast.warn('deleted');
	};

	render() {
		return (
			<React.Fragment>
				<ToastContainer />
				<button className="btn btn-primary" onClick={this.handleAdd}>
					Add
				</button>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{this.state.posts.map((post) => (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>
									<button className="btn btn-info btn-sm" onClick={() => this.handleUpdate(post)}>
										Update
									</button>
								</td>
								<td>
									<button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default App;
