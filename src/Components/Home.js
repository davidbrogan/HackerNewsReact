import React, {useEffect} from 'react';
import { Navbar, Button, Nav} from 'react-bootstrap';

function Home({ posts}) {
  
    const [ noPosts, setNoPosts] = React.useState(20);
   
    if (posts.length === 0) {
      return <div>Loading... Patient is a virtue.........</div>;
    }
  
    return (
      
      <div>
       <Navbar  style = {{backgroundColor: "#18a2b8"}}>
    <Navbar.Brand style = {{marginLeft: "5%"}}>
        HackerNews</Navbar.Brand>
        <Nav className="mr-auto" style = {{textAlign: "right"}}>
      <Nav.Link href="#home">Top</Nav.Link>
      <Nav.Link href="#home">New</Nav.Link>
      <Nav.Link href="#home">Past</Nav.Link>
      <Nav.Link href="#home">Show</Nav.Link>
      <Nav.Link href="#home">Ask</Nav.Link>
      <Nav.Link href="#home">Jobs</Nav.Link>


      </Nav>
        
  </Navbar>
 
 



  <div style = {{paddingTop: '20px'}}>
      <td style = {{width: '70%'}}> 

      <h4 style = {{textAlign: "left"}}>Latest Stories</h4>

        <ul >
          {posts.slice(0,noPosts).map(post => (
            <ol  style = {{margin: '0 0 10px 0'}}key={post.id}>
              <a href={post.url}>{post.title}</a>
            </ol>
          ))}
        </ul>
        </td>
        <td >
        <h4 style = {{textAlign: "center"}}>Top Stories</h4>
        <ul >
          {posts.slice(0,5).map(post => (
            <ol  style = {{margin: '0 0 10px 0'}}key={post.id}>
              <a href={post.url}>{post.title}</a>
            </ol>
          ))}
          </ul>
        </td>
        </div>
      </div>

     
    );
    
  }
export default Home;
