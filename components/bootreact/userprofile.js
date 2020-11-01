import React, { Component } from "react";
import axios from "axios";
import Config from "./config/config.json";
import user from "./user.jpg";

class userprofile extends Component {
  state = {
    posts: [],
  };
  Fetchposts = async () => {
    const { data: posts } = await axios.get(Config.urlendpoint);

    this.setState({ posts });
  };
  render() {
    return (
      <div>
        <h1>Name:-{this.props.match.params.username}</h1>
        <img
          src={user}
          style={{ margin: "auto", width: "30%", height: "30%" }}
        />
        <br />
        <button className="btn btn-primary" onClick={this.Fetchposts}>
          Fetch Posts
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default userprofile;
