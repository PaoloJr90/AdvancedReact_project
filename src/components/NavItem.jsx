import React from "react";

import "./styles/navItem.scss";

function NavItem({ url, title }) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
}

export default NavItem;
