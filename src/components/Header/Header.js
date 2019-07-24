import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';
import Menu from './Menu';
import './Header.scss';
import { Container } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

const SomeComponent = withRouter(props => <Header {...props}/>);

const Header = (props) => {
  const [menuFixed, setMenuFixed] = useState(false);
  const MainMenu = [
    { name: '픽시 홈', href: '/' },
    { name: '사진 분할', href: '/picxy' },
  ];

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', () => {
      console.log('offset', window.pageYOffset <= 150);
      if (window.pageYOffset <= 150) {
        console.log('_____________________top', menuFixed);
        if (!menuFixed) {
          setMenuFixed(true);
        }
      } else {
        console.log('_____________________bottom', menuFixed);
        if (menuFixed) {
          setMenuFixed(false);
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, []);

  
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
