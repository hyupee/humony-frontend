import React from 'react';
import MenuList from './MenuList';
import Menu from './Menu';
import './Header.scss';
import { Container } from '@material-ui/core';


const Header = () => {
  const MainMenu = [
    { name: '픽시 홈', href: '/' },
    { name: '사진 분할', href: '/picture' },
    { name: '회원가입', href: '/picture' },
  ];

  return (
    <header>
      <nav>
        <Container>
          <h1 className="header-logo">
            <Menu name='Picxy' url='/' />
          </h1>
          <MenuList menuList={MainMenu} />
        </Container>
      </nav>
    </header>
  );
};

export default Header;
