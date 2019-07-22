import React from 'react';
import * as MainSection from '../Section';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';


const Main = () => {
  const sectionList = [
    { component: '' }
  ];

  return (
    <>
      <MainSection.Section1>
        <div className="main_info">
          <h2 class="main_title">당신의 사진을 분할해 드립니다.</h2>
          <Link to="" className="btn btn-main">시작하기</Link>
        </div>
      </MainSection.Section1>
      <MainSection.Section2></MainSection.Section2>
    </>
  );
};

export default Main;