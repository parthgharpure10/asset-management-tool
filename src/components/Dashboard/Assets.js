// Assets.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';

const Assets = ({ assets }) => {
    const useStyles = makeStyles((theme) => ({
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
      }));
      const classes = useStyles();

  return (
    <main className={classes.content}>
    <Container maxWidth="md">
    <div className="assets">
      <h2>Assets</h2>
    </div>
    </Container>
    </main>
  );
};

export default Assets;
