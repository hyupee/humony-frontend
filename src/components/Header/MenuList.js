import React from 'react';
import Menu from './Menu';
import propTypes from 'prop-types';

const MenuList = ({ menuList }) => {
  return (
    <ul className="gnb_list">
      {
        menuList.map((menu, idx) => <Menu key={idx} name={menu.name} url={menu.href} />)
      }
    </ul>
  );
};

MenuList.propTypes = {
  menuList: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      href: propTypes.string,
    })
  ),
};

export default MenuList;
