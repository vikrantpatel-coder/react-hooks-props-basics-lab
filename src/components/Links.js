import React from "react";

function Links(props) {
  return (
    <h3>
      Links
      <a href="url">{props.github} </a>
      <a href="url">{props.linkedin} </a>
    </h3>
  );
}

export default Links;
