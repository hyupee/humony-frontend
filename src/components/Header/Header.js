import React from 'react';
import MenuList from './MenuList';
import Menu from './Menu';


const Header = () => {
  const MainMenu = [
    { name: '홈', href: '/' },
    { name: '사진 분할', href: '/picture' },
  ];

  return (
    <header>
      <nav>
        <div className="container">
          <h1>
            <Menu name='Picxy' url='/' />
          </h1>
          <MenuList menuList={MainMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
