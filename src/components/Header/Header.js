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

  console.log(props);

  //console.log(props.location.pathname);

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
