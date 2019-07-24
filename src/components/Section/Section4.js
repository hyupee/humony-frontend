import React from 'react';
import { Container } from '@material-ui/core';

import Youtube from '../../assets/images/youtube.png';
import Powerpoint from '../../assets/images/powerpoint.png';
import Poster from '../../assets/images/poster.png';

import './Section.scss';

export const Section4 = () => {
  return (
    <section id="section_4">
      <Container maxWidth="md">
        <div className="section_title_box">
          <h2 className="section_title">나만의 스티커, <br/>나만의 이미지</h2>
          <p className="section_title_sub">프레젠테이션, 유튜브 영상 썸네일, 포스터등등<br /> 배경 이미지를 만들 때 남들과 차별화된 나만의 이미지와 스티커로! </p>

          <div className="icon_wrapper">
            <img src={Youtube} alt="youtube" width="100" />
            <img src={Powerpoint} alt="powerpoint" width="100" />
            <img src={Poster} alt="poster" width="100" />
          </div>
        </div>
      </Container>
    </section>
  );
};
