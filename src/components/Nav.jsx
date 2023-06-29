import React from "react";

import "./styles/nav.scss";

function Nav({ url, title }) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
}

export default Nav;
