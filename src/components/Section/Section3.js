import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import CardImage3 from '../../assets/images/cut.jpg';

import './Section.scss';

const useStyles = makeStyles({
  card: {
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

export const Section3 = () => {
  const classes = useStyles();
  
  return (
    <section id="section_3">
      <Container maxWidth="md">
        <div className="section_title_box ta-r">
          <h2 className="section_title">어렵고 비싼 툴 없이도<br />손쉽게 자르기!</h2>
          <p className="section_title_sub">사용하기 어려운 도구는 이제 그만!<br /> PICXY로 쉽고 간단하게 자르기</p>

          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="290"
              image={CardImage3}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
      </Container>
    </section>
  );
};
