import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import CardImage from '../../assets/images/3.jpeg';
import CardImage2 from '../../assets/images/jfl.jpg';

import './Section.scss';

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
});

export const Section2 = () => {
  const classes = useStyles();

  return (
    <section id="section_2">
      <Container maxWidth="md">
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
      </Container>
    </section>
  );
};
