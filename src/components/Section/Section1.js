import React from 'react';
import { Link } from 'react-router-dom';
import * as Common from '../Common';
import './Section.scss';

export const Section1 = () => {
  return (
    <Common.SectionVH id="section_1">
      <div className="main_info">
        <h2 className="main_title">당신의 사진을 분할해 드립니다.</h2>
        <Link to="/picxy" className="btn btn-main">시작하기</Link>
      </div>
    </Common.SectionVH>
  );
};
