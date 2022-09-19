import React from "react";

const NavBar = () => {
    return (
        <div className="topnav" id="myTopnav">
      <a href="/" className="active">Home</a>
      <a href="/gall">Gallery</a>
      
      
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
    )

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

export default NavBar;