import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavigationList from '../components/NavigationList';
import { Grid, Divider, Typography } from '@material-ui/core';
import Introduction from '../components/Introduction';
import FirstRestApi from '../components/firstRestApi';
import FirstRapiQs from '../components/firstRestApiQs';
import Appbar from '../components/appBar';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    test: {
      position:'-webkit-sticky',
      postition: 'sticky'
    }
  });

function firstApi(props) {
    const {classes} = props;
    return(
    <div className={classes.root}>
    <Appbar></Appbar>
      <Grid container alignItems="stretch" spacing={0}>
        <Grid item xs={1}></Grid>
        <Grid item lg={8}>
          <a name="introduction">
            <Typography variant="overline">Installation and setup</Typography>
          </a>
          <div>
            <Introduction></Introduction>
          </div>
          <Divider />
          <a name="httpListener">
            <Typography variant="overline">Create HTTP Listener</Typography>
          </a>
          <div>
            <FirstRestApi></FirstRestApi>
            </div>
            <Divider />
            <div>
              <FirstRapiQs></FirstRapiQs>
            </div>
          </Grid>
          
        <Grid item sm={3}><NavigationList className={classes.test}></NavigationList></Grid>
      </Grid>

    </div>
    );
}

firstApi.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(firstApi)