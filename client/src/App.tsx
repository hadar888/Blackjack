import { Grid, Button } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { getCard, noMoreCards } from './Api/GameMovesApi.ts';

const useStyles = createUseStyles({
  appContainer: {
    height: '100vh'
  }
});

const handleHitClick = () => {
  getCard(false);
}

const handleDoubleClick = () => {
  getCard(true);
}

const App = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.appContainer} justifyContent='space-around' alignItems='center'>
      <Grid item>
        <Button variant="contained" onClick={handleHitClick}>Hit</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleDoubleClick}>Double</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={noMoreCards}>Stand</Button>
      </Grid>
    </Grid>
  );
}

export default App;
