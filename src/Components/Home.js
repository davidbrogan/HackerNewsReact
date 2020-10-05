import React, {useEffect} from 'react';
import { Navbar, Button } from 'react-bootstrap';

function Home({ posts}) {
  
    const [ noPosts, setNoPosts] = React.useState(10);
   
    if (posts.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      
      <div>
       <Navbar  style = {{backgroundColor: "#18a2b8"}}>
    <Navbar.Brand style = {{marginLeft: "45%"}}>
        HackerNews</Navbar.Brand>
        
  </Navbar>
  <div style = {{paddingTop: '30px'}}>
  <Button variant  ='info'  style= {{float: "right"}} onClick={() => setNoPosts(noPosts + 10)}>
     More Posts
      </Button>
  </div>

  <h4 style = {{textAlign: "center"}}>Top 50 Stories</h4>
  <div>
        <ul style = {{textAlign: 'left'}} >
          {posts.slice(0,noPosts).map(post => (
            <ol key={post.id}>
              <a href={post.url}>{post.title}</a>
            </ol>
          ))}
        </ul>
        </div>
      </div>
     
    );
    
  }
export default Home;
