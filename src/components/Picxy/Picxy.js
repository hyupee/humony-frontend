import React, { useState } from 'react';
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
  const [stage, setStage] = useState(2);
  const classes = useStyles();

  return (
    <Common.SectionVH className="picxy_wrap">
      <Container className="container" maxWidth="md">
        <Paper className={classes.root}>
          {(() => {
            switch (stage) {
              case 1:
                return <SendArea changeStage={setStage} />
              case 2:
                return <Preview />
              default:
                // do nothing
            }
          })()}
        </Paper>
      </Container>
    </Common.SectionVH>
  );
}

export default Picxy;