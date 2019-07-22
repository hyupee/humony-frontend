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
          <h2 className="main_title">당신의 사진을 분할해 드립니다.</h2>
          <Link to="" className="btn btn-main">시작하기</Link>
        </div>
      </MainSection.Section1>
      <MainSection.Section2>
        <div className="section_title_box">
          <h2 className="section_title">내가 원하는 부분만<br />골라서 다운로드!</h2>
          <p className="section_title_sub">단 한번의 업로드로 빠르고 정확하게!<br />내가 원하는 부분만 다운로드할 수 있어요</p>
        </div>
      </MainSection.Section2>
      <MainSection.Section3>
        <div className="section_title_box ta-r">
          <h2 className="section_title">어렵고 비싼 툴 없이도<br />손쉽게 자르기!</h2>
          <p className="section_title_sub">기존에 있는 이미지 분할 도구들은 비싸고 사용하기가 어려워 진입장벽이 높았지만<br /> PICXY는 간단하고 무료로 툴을 제공해 사진을 업로드 하기만 하면 끝! </p>
        </div>
      </MainSection.Section3>
      <MainSection.Section4>
        <div className="section_title_box">
          <h2 className="section_title">나만의 스티커, <br/>나만의 이미지</h2>
          <p className="section_title_sub">프레젠테이션, 유튜브 영상 썸네일, 포스터나 웹사이트에 사용될 배경 이미지를 만들 때 남들과 차별화된 나만의 이미지와 스티커로! </p>
        </div>
      </MainSection.Section4>
    </>
  );
};

export default Main;