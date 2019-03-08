import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, ListSubheader, GridListTileBar, ButtonBase } from '@material-ui/core';
import Link from 'next/link'
import Appbar from '../components/appBar';
//import fetch from 'isomorphic-unfetch'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    position: 'relative',
    height: 'auto',
    maxWidth: 250
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <React.Fragment> 
    <Appbar></Appbar>
    <div className={classes.root}>
      <GridList cellHeight={180} spacing={16} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Trailheads</ListSubheader>
        </GridListTile>
          <GridListTile key="Salesforce API">
            <ButtonBase
            focusRipple
            key="Salesforce API"
            >
            <Link href="/firstApi"><img src="/static/firstApi.jpg" className={classes.img}></img></Link>
            </ButtonBase>
            <GridListTileBar
              title="Simple Salesforce API"
            />
          </GridListTile>
          <GridListTile key="RAML API">
            <ButtonBase
            focusRipple
            key="RAML API"
            >
            <Link href="/ramlApi"><img src="/static/ramlApi.jpg" className={classes.img}></img></Link>
            </ButtonBase>
            <GridListTileBar
              title="Simple RAML API"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </React.Fragment>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

/*ContainedButtons.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/repos/okulkarni3/mtrahead/contents/static/JdkDownload.jpg');
  const data = await res.json();
  return {
    img: data.content.replace("\n","")
  }
}*/

export default withStyles(styles)(ContainedButtons)