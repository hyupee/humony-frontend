import React, { useState, useEffect } from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Common from '../Common';

import SendArea from './SendArea';
import Preview from './Preview';

import './Picxy.scss';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 32,
    height: 610,
  },
}));

const Picxy = () => {
  const [stage, setStage] = useState(1);
  const [stageResult1, setStageResult1] = useState({});
  const [stageResult2, setStageResult2] = useState({});
  const classes = useStyles();

  useEffect(() => {
    console.log(stageResult2);
  }, [stageResult2]);

  return (
    <>
      <Common.SectionVH className="picxy_wrap">
        <Container className="container" maxWidth="md">
          <Paper className={classes.root}>
            {(() => {
              switch (stage) {
                case 1:
                  return <SendArea changeStage={setStage} returnResult={setStageResult1} />
                case 2:
                  return <Preview origin={stageResult1.before} segment={stageResult1.ing} color_list={stageResult1.color_list} returnResult={setStageResult2} />
                default:
                  // do nothing
              }
            })()}
          </Paper>
        </Container>
      </Common.SectionVH>
    </>
  );
}

export default Picxy;