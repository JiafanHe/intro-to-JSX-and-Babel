//Use import instead of require ,we're able to modularise these dependencies far better
import React from "react";
import ReactDOM from "react-dom";

//used the ReactDOM module's render method in order to display a h1 inside that root div.
ReactDOM.render(
  <div>
    <h1>Hello world!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
//for the render method, we can only put one element. But we can put them into a div.
