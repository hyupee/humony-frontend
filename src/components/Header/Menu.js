import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Menu = ({ url, name }) => {
  return (
    <Link to={url}>{name}</Link>
  );
};

Menu.propTypes = {
  name: propTypes.string,
  url: propTypes.string,
};

export default Menu;
