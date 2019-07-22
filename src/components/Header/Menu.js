import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ url, name, styleName ='' }) => {
  return (
    <Link to={url} className={styleName}>{name}</Link>
  );
};


export default Menu;
