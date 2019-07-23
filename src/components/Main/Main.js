import React from 'react';
import * as MainSection from '../Section';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardImage from '../../assets/images/3.jpeg';
import CardImage2 from '../../assets/images/jfl.jpg';
import CardImage3 from '../../assets/images/cut.jpg';
import smileImage from '../../assets/images/smile.jpg';

import Youtube from '../../assets/images/youtube.png';
import Powerpoint from '../../assets/images/powerpoint.png';
import Poster from '../../assets/images/poster.png';

const useStyles = makeStyles({
  card: {
    padding: 5,
    maxWidth: 345,
    height: 300,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    transform: 'rotate(10deg)'
  },
  card2: {
    padding: 5,
    maxWidth: 345,
    height: 300,
    position: 'absolute',
    top: 55,
    bottom: 0,
    right: 30,
    margin: 'auto'
  },
  cardLeft: {
    padding: 5,
    maxWidth: 345,
    height: 300,
    position: 'absolute',
    top: 55,
    bottom: 0,
    left: 0,
    margin: 'auto'
  }
});


const Main = () => {
  const classes = useStyles();

  return (
    <>
      <MainSection.Section1>
        <div className="main_info">
          <h2 className="main_title">당신의 사진을 분할해 드립니다.</h2>
          <Link to="/picxy" className="btn btn-main">시작하기</Link>
        </div>
      </MainSection.Section1>
      <MainSection.Section2>
        <div className="section_title_box">
          <h2 className="section_title">내가 원하는 부분만<br />골라서 다운로드!</h2>
          <p className="section_title_sub">단 한번의 업로드로 빠르고 정확하게!<br />내가 원하는 부분만 다운로드할 수 있어요</p>


          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="290"
              image={CardImage}
              title="Contemplative Reptile"
            />
          </Card>
          <Card className={classes.card2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="290"
              image={CardImage2}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
        
      </MainSection.Section2>
      <MainSection.Section3>
        <div className="section_title_box ta-r">
          <h2 className="section_title">어렵고 비싼 툴 없이도<br />손쉽게 자르기!</h2>
          <p className="section_title_sub">사용하기 어려운 도구는 이제 그만!<br /> PICXY로 쉽고 간단하게 자르기</p>

          <Card className={classes.cardLeft}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="290"
              image={CardImage3}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
      </MainSection.Section3>
      <MainSection.Section4>
        <div className="section_title_box">
          <h2 className="section_title">나만의 스티커, <br/>나만의 이미지</h2>
          <p className="section_title_sub">프레젠테이션, 유튜브 영상 썸네일, 포스터등등<br /> 배경 이미지를 만들 때 남들과 차별화된 나만의 이미지와 스티커로! </p>

          <div className="icon_wrapper">
            <img src={Youtube} alt="youtube" width="100" />
            <img src={Powerpoint} alt="powerpoint" width="100" />
            <img src={Poster} alt="poster" width="100" />
          </div>
        </div>
      </MainSection.Section4>
    </>
  );
};

export default Main;