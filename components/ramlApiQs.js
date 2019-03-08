
import CloseRounded from '@material-ui/icons/CloseRounded'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography, List, ListItem, Avatar, Divider, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: purple[700]
    },
    answers: {
        paddingLeft: '5px'
    },
    verifyBtn: {
        float: 'right',
    }
  });

 class RamlApiQs extends React.Component {
    state= {
        answers: [],
        dialogOpen: false,
        dialogText:"Sorry you have wrong answers for "
    }

    handleListItemClick = (event, answer, question)=>{
        let ans = this.state.answers;
        ans[question] = answer;
        this.setState({answers:ans});
    }

    verifyResult = () =>{
        let ans = this.state.answers;
        if(ans[1] ==="t" && ans[2] ==="b" && ans[3] === "c"){
            this.setState(
                {
                    dialogOpen:true,
                    wrongAns:null,
                    dialogText: "Thank you for going through the Mulesoft trailhead. I am striving to make it better and your feedback is always welcome. Please contact me on okulkarni@acumensolutions.com"});
        } else {
            let wrongAns = [];
            if(ans[1]!="t") wrongAns.push(1);
            if(ans[2] != "b") wrongAns.push(2);
            if(ans[3] != "c") wrongAns.push(3);
            this.setState({dialogOpen:false,
                wrongAns: wrongAns})

        }
    }

    handleDialogClose = () => {
        this.setState({dialogOpen: false})
    }

    render() {
        const {classes} = this.props;
        return(
            <React.Fragment>
            <Dialog open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            >
                <DialogTitle id="alert-dialog-title">{"Woohoo! Thank you for taking the quiz!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.state.dialogText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleDialogClose} color="primary">Okay</Button>
                </DialogActions>
            </Dialog>
            <Card className={classes.root}>
                <CardHeader title="Quiz"/>
                <Divider />
                <CardContent>
                    <List>
                    
                        <ListItem>{this.state.wrongAns != undefined && this.state.wrongAns.filter(ans=>ans === 1)[0] === 1 ? <CloseRounded></CloseRounded>: null}<Typography variant="h6">1.</Typography>&nbsp;<Typography variant="subtitle2">APIKit generate flows based on RAML definition</Typography></ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(this,"t",1)} selected={this.state.answers[1]==="t"}>
                        <Avatar aria-label="A" className={classes.avatar}>A</Avatar><Typography variant="body2" className={classes.answers}>True</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"f",1)} selected={this.state.answers[1]==="f"}>
                        <Avatar aria-label="B" className={classes.avatar}>B</Avatar><Typography variant="body2" className={classes.answers}>False</Typography>
                        </ListItem>
                    </List>
                    <List>
                        <Divider />
                        <ListItem>{this.state.wrongAns != undefined && this.state.wrongAns.filter(ans=>ans === 2)[0] === 2 ? <CloseRounded></CloseRounded>: null}<Typography variant="h6">2.</Typography>&nbsp;<Typography variant="subtitle2">What is the correct way to generate flow for POST method in Accounts API app?</Typography></ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"a",2)} selected={this.state.answers[2]==="a"}>
                        <Avatar aria-label="A" className={classes.avatar}>A</Avatar><Typography variant="body2" className={classes.answers}>Create a Mulesoft flow and rename flow as post:\accounts:Accounts-config</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"b",2)} selected={this.state.answers[2]==="b"}>
                        <Avatar aria-label="B" className={classes.avatar}>B</Avatar><Typography variant="body2" className={classes.answers}>Define POST method in existing RAML and regenerate flows from RAML</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"c",2)} selected={this.state.answers[2]==="c"}>
                        <Avatar aria-label="B" className={classes.avatar}>C</Avatar><Typography variant="body2" className={classes.answers}>Define POST method in existing RAML but no need to regenerate flows</Typography>
                        </ListItem>
                    </List>
                    <List>
                        <Divider />
                        <ListItem>{this.state.wrongAns != undefined && this.state.wrongAns.filter(ans=>ans === 3)[0] === 3 ? <CloseRounded></CloseRounded>: null}<Typography variant="h6">3.</Typography>&nbsp;<Typography variant="subtitle2">After regenerating new flows for new methods/resources</Typography></ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"a",3)} selected={this.state.answers[3]==="a"}>
                        <Avatar aria-label="A" className={classes.avatar}>A</Avatar><Typography variant="body2" className={classes.answers}>Wrong! Cannot regenerate flows from same RAML</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"b",3)} selected={this.state.answers[3]==="b"}>
                        <Avatar aria-label="B" className={classes.avatar}>B</Avatar><Typography variant="body2" className={classes.answers}>All implemented flows in existing XML config file gets replaced by boilerplate flows</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"c",3)} selected={this.state.answers[3]==="c"}>
                        <Avatar aria-label="B" className={classes.avatar}>C</Avatar><Typography variant="body2" className={classes.answers}>New flows get added into the existing XML config file without any changes to existing flows</Typography>
                        </ListItem>
                    </List>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button variant="contained" color="primary" className={classes.verifyBtn} onClick={this.verifyResult}>Verify</Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )
    }
  }

  RamlApiQs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(RamlApiQs);