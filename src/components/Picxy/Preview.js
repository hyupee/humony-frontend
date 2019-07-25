import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import './Preview.scss';

import img from '../../assets/images/jfl.jpg';

const ColorList =  (color_list) => {
  color_list = '[[0,0,0], [0,64,0], [128,0,0], [0,0,128]]';


};

const Preview = ({ origin, segment, color_list }) => {
  color_list = '[[0,0,0], [0,64,0], [128,0,0], [0,0,128]]';

  const newColorList = JSON.parse(color_list).map(color => `rgb(${color.join(',')})`);

  console.log(newColorList);
  

  const CoverImage = styled.div`
    width: 100%;
    height: 90%;
    background: #333;
    opacity: .8;
    background-size: cover;
    position: absolute;
    z-index: 99;
  `;

  const PreviewImage = styled.div`
    width: 100%;
    height: 90%;
    background-image: url(${img});
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
  `;

  return (
    <div className="preview_box">
      <Grid container spacing={3}>
        <Grid item xs={7} className="img_grid">
          <div className="img_preview">
            <CoverImage />
            <PreviewImage />
            <button className="btn">업로드</button>
          </div>
          
        </Grid>
        <Grid item xs={5} className="color_grid">
          <h3>추출할 요소의 색상을 선택해 주세요!</h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default Preview;