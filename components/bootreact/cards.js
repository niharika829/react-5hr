import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cake1 from "./images/cake1.jpg";
import Cake2 from "./images/cake2.jpg";
import Cake3 from "./images/cake3.jpg";
import "bootstrap/dist/css/bootstrap.css";
const About = () => {
  const { isAuthenticated } = useAuth0();
  const posts = [
    {
      name: "stawberry cake",
      price: "$15",
      category: "cakes",
      img: Cake1,
    },
    {
      name: "chocolate cake",
      price: "$19",
      category: "cakes",
      img: Cake2,
    },
    {
      name: "caramel cake",
      price: "$20",
      category: "cakes",
      img: Cake3,
    },
  ];
  //return isAuthenticated && <div></div>;

  return (
    isAuthenticated && (
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col-sm-4">
              <img
                src={post.img}
                alt={post.name}
                style={{ margin: "auto", width: "60%", height: "60%" }}
              />
              <br />
              NAME:-<b>{post.name}</b> <br />
              CATEGORY :- <i>{post.category}</i>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default About;
