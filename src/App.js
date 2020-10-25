import React from "react";
import "./App.css";
import Home from "./Components/Home";

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function getStories() {
      //api to fetch the newest news stories
      let api = "https://hacker-news.firebaseio.com/v0/newstories.json";

      try {
        //Check to see if we are getting a valid response.
        const response = await fetch(api);

        //Error message is thrown if response is invalid
        if (response.ok === false) {
          throw new Error("Reponse Error: " + response.text);
        }

        //if response is valid, the ids are stored.
        const newsStory = await response.json();

        //`promises`are sliced into the latest 50 stories.
        //Stories are returned by using template literals.
        //Each id is passed into the fetch stateement and the infromation is returned.
        const promises = newsStory
          .slice(0, 50)
          .map(id =>
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            ).then(response => response.json())
          );

        //waits for all the promises to be returned and stores them in result
        const result = await Promise.all(promises);
        console.log(result);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getStories();
  }, []);

  //passing of posts to Home to render them.
  return <Home posts={posts} />;
}

export default App;
