import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';



function App() {
  const [posts, setPosts] = React.useState([]);
  const [noPosts, setNoPosts] = React.useState(10);

    React.useEffect(() => {
     
      async function getStories() {
       
        let api = "https://hacker-news.firebaseio.com/v0/topstories.json";
        try {
          const response = await fetch(api);
          if (response.ok === false) {
            throw new Error("Reponse Error: " + response.text);
          }
          const newsStory = await response.json();
     
          console.log(noPosts)
          const promises = newsStory
            .slice(0, 50)
            .map(id =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                response => response.json()
              )
            );
          const result = await Promise.all(promises);
          console.log(result);
          setPosts(result);
     
          console.log(noPosts);

        } catch (err) {
          console.error(err);
        }
      }
      getStories();
    }, []);
   
   
  return (

      <Home posts={posts} />

  );

}

export default App;
