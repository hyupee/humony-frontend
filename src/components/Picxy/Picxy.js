import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Common from '../Common';

import SendArea from './SendArea';

import './Picxy.scss';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 32,
    height: 610,
  },
}));

const Picxy = () => {
  const [stage, setStage] = useState(1);
  const classes = useStyles();

  return (
    <Common.SectionVH className="picxy_wrap">
      <Container className="container" maxWidth="md">
        <Paper className={classes.root}>
          {(() => {
            switch (stage) {
              case 1:
                return <SendArea changeStage={setStage} />
                break;
              case 2:
                return <div>124</div>
                break;
            }
          })()}
        </Paper>
      </Container>
    </Common.SectionVH>
  );
}

export default Picxy;