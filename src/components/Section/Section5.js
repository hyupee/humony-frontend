import React from 'react';
import { Link } from 'react-router-dom';

import './Section.scss';

export const Section5 = () => {
  return (
    <section id="section_5">
      <h3>사진분할엔 PICXY</h3>
      <Link to="/picxy" className="btn btn-main">시작하기</Link>
    </section>
  );
};
