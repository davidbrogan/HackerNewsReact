import React, { useEffect } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
const logo = {
    marginLeft: "3%",
    color: "white",
    fontSize: "40px"
  };
  const navStyle = {
    paddingTop: "15px",
    backgroundColor: "#18a2b8",
    paddingBottom: "15px"
  };

function NavBar() {
 
  return (
    <div>
      <Navbar style={navStyle}>
        <Navbar.Brand style={logo}>HackerNews</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Top</Nav.Link>
          <Nav.Link href="#home">New</Nav.Link>
          <Nav.Link href="#home">Past</Nav.Link>
          <Nav.Link href="#home">Show</Nav.Link>
          <Nav.Link href="#home">Ask</Nav.Link>
          <Nav.Link href="#home">Jobs</Nav.Link>
        </Nav>
      </Navbar>

      
    </div>
  );
}
export default NavBar;
