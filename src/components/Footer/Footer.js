import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <h3>사진분할엔 PICXY</h3>
      <Link to="/picxy" className="btn btn-main">시작하기</Link>
    </footer>
  );
};

export default Footer;
