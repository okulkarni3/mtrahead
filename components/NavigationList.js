import { List, ListSubheader, ListItem, ListItemText, withStyles, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    position: 'sticky'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },

});

function NavigationList(props) {
  const { classes } = props;
  return (

    <List component="div"
      subheader={<ListSubheader disableSticky={true} component="div">Contents</ListSubheader>}
      className={classes.root}>
      <div>
      <ListItem href="#introduction">
        <ListItemText inset><Link href="#introduction"><Typography variant="caption" gutterBottom>
        Installation and setup
      </Typography></Link></ListItemText>
      </ListItem>
      <ListItem href="#httpListener">
        <ListItemText inset><Link href="#httpListener"><Typography variant="caption" gutterBottom>
        Create HTTP Listener
      </Typography></Link></ListItemText>
      </ListItem>
      <ListItem href="#salesforceConfig">
        <ListItemText inset><Link href="#salesforceConfig"><Typography variant="caption" gutterBottom>
        Configure SFDC Connector
      </Typography></Link></ListItemText>
      </ListItem>
      <ListItem href="#runntest">
        <ListItemText inset><Link href="#runntest"><Typography variant="caption" gutterBottom>
        Run and Test
      </Typography></Link></ListItemText>
      </ListItem>      
      </div>
    </List>
  )
}

NavigationList.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(NavigationList);