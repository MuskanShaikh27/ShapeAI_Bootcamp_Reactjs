import React from "react";

import ReactDOM from "react-dom";


function Footer(){

  var currentyear= new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currentyear}</p>
    </footer>
  );
}

export default Footer;