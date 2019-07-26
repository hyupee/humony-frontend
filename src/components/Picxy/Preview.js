import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as api from '../../lib/api';

import './Preview.scss';

import img from '../../assets/images/jfl.jpg';
import swal from 'sweetalert';

const ColorCheckBox = ({ color, checked, index, handleChecked }) => {
  const ColorBadge = styled.span`
    display: block;
    background-color: ${color};
    padding: 3px 15px;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-weight: 300;
  `;

  return useMemo(() => {
    return (
      <FormControlLabel 
        control={<Checkbox checked={checked} onChange={() => handleChecked(index)} />}
        label={<ColorBadge>Check {index + 1}</ColorBadge>}
      />
    )
  }, [checked]);
}

const ColorList =  ({ checkList, handleChecked }) => {
  return checkList.map(({ color, checked }, index) => <ColorCheckBox color={color} checked={checked} index={index} key={index} handleChecked={handleChecked} />);  
};

const Preview = ({ origin, segment, color_list, returnResult }) => {
  const downloadData = {
    before: origin,
    ing: segment,
    color_list,
  };

  const newColorList = JSON.parse(color_list);

  newColorList.splice(0, 1);

  const checkList = newColorList.map((color, idx) => {
    return {
      checked: false, 
      color: `rgba(${color.join(',')}, .8)`,
      idx: idx + 1,
    };
  });

  const [ColorCheckList, setColorCheckList] = useState(checkList);

  const handleCheck = (idx) => {
    const checkList = [...ColorCheckList];

    if (checkList[idx]) {
      checkList[idx].checked = !checkList[idx].checked;
    }

    setColorCheckList(checkList);
  };
  
  const handleDownload = async (type) => {
    const checked_list = ColorCheckList.filter(o => o.checked);

    if (!checked_list.length) {
      swal('다운로드 실패', '색상을 한개 이상 선택해주세요', 'error');

      return false;
    }

    downloadData.color_sel = checked_list.map(o => o.idx).join('');

    console.log(downloadData);

    if (type !== 'test') {
      const result = await api.sendColor(downloadData);

      swal('다운로드 성공', '다운로드에 성공했습니다.', 'success');

      returnResult(result);
    } else {
      const result = 'donwload result';

      swal('다운로드 성공', '다운로드에 성공했습니다.', 'success');

      returnResult(result);
    }
    
  }

  const CoverImage = styled.div`
    width: 100%;
    height: 90%;
    background: #333;
    opacity: .8;
    /* background-image: url(${segment}); */
    background-size: cover;
    position: absolute;
    z-index: 99;
  `;

  const PreviewImage = styled.div`
    width: 100%;
    height: 90%;
    /* background-image: url(${origin}); */
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
            <button className="btn" onClick={() => handleDownload('test')}>다운로드</button>
          </div>
          
        </Grid>
        <Grid item xs={5} className="color_grid">
          <h3>추출할 요소의 색상을 선택해 주세요!</h3>
          <ColorList checkList={ColorCheckList} handleChecked={handleCheck} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Preview;