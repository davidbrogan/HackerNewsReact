import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";

const ulstyle = {
  fontSize: "16px",
  textAlign: "left",
  marginLeft: "25%",
  marginRight: "25%",
  paddingTop: "2%"
};
function Home({ posts }) {
  //20 inital posts are rendered to the screen
  const [noPosts, setNoPosts] = React.useState(20);

  if (posts.length === 0) {
    return <div>Loading... Patient is a virtue.........</div>;
  }

  return (
    <div>
      <NavBar></NavBar>

      <h5 style={{ margin: "2% 25% 0 25%" }}>
        Welcome to David's Hacker News Site
      </h5>
      <h5 style={{ margin: "0 25% 0 25%" }}>
        Here you can view the latest and top news stories of the world.
      </h5>

      <div style={{ paddingTop: "30px" }}>
        <h4 style={{ margin: "0 25% 0 25%" }}>Latest Hacker News Stories</h4>

        {/* Lists the newest stories in bullet point format */}
        <ul style={ulstyle}>
          {posts.slice(0, noPosts).map(post => (
            <li style={{ margin: "0 0 10px 0" }} key={post.id}>
              <a href={post.url}>{post.title}</a>
            </li>
          ))}
        </ul>

        {/* Button to allow user to load 10 additional posts. */}
        <Button
          variant="info"
          style={{ margin: "0 0 2% 85%" }}
          onClick={() => setNoPosts(noPosts + 10)}
        >
          Load More Posts
        </Button>
      </div>
    </div>
  );
}
export default Home;
