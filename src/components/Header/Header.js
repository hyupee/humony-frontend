import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';
import Menu from './Menu';
import './Header.scss';
import { Container } from '@material-ui/core';

const Header = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  const MainMenu = [
    { name: '픽시 홈', href: '/' },
    { name: '사진 분할', href: '/picture' },
    //{ name: '회원가입', href: '/picture' },
  ];

  window.addEventListener('scroll', e => {
    setMenuFixed(window.pageYOffset >= 150);
  });

  useEffect(() => {
    console.log(menuFixed);
  }, [menuFixed]);
  
  return (
    <header className={ `${menuFixed ? 'menu_fixed' : '' }` }>
      <nav>
        <Container maxWidth="md">
          <h1 className="header-logo">
            <Menu name='PICXY' url='/' />
          </h1>
          <MenuList menuList={MainMenu} />
        </Container>
      </nav>
    </header>
  );
};

export default Header;
