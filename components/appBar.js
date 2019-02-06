import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1,
    },
    barTitle: {
      marginLeft: '45%'
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  };

  function appBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <AppBar position="static" color='primary' className={classes.appBar}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className={classes.barTitle}>
              Mulesoft Trailhead
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
    );
  }

  appBar.propTypes = {
      classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(appBar);