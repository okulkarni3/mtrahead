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



class FirstRapiQs extends React.Component {
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
        if(ans[1] ==="c" && ans[2] ==="a"){
            this.setState(
                {
                    dialogOpen:true,
                    dialogText: "Thank you for going through the Mulesoft trailhead. I am striving to make it better and your feedback is always welcome. Please contact me on okulkarni@acumensolutions.com"});
        } else {
            let wrongAns = [];
            if(ans[1]!="c") wrongAns.push(1);
            if(ans[2] != "a") wrongAns.push(2);
            this.setState({dialogOpen:true,
                dialogText : "You will have to retake the quiz. Wrong answer(s) for question(s) "+wrongAns})

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
                        <ListItem><Typography variant="h6">1.</Typography>&nbsp;<Typography variant="subtitle2">To bring back Name attribute of Account object</Typography></ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(this,"a",1)} selected={this.state.answers[1]==="a"}>
                        <Avatar aria-label="A" className={classes.avatar}>A</Avatar><Typography variant="body2" className={classes.answers}>Add transformation for Name</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"b",1)} selected={this.state.answers[1]==="b"}>
                        <Avatar aria-label="B" className={classes.avatar}>B</Avatar><Typography variant="body2" className={classes.answers}>Change SELECT clause in SOQL query and add transformation for name</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"c",1)} selected={this.state.answers[1]==="c"}>
                        <Avatar aria-label="B" className={classes.avatar}>C</Avatar><Typography variant="body2" className={classes.answers}>Change SELECT clause in SOQL query but no need to add transformation</Typography>
                        </ListItem>
                    </List>
                    <List>
                        <Divider />
                        <ListItem><Typography variant="h6">2.</Typography>&nbsp;<Typography variant="subtitle2">To block other HTTP methods</Typography></ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"a",2)} selected={this.state.answers[2]==="a"}>
                        <Avatar aria-label="A" className={classes.avatar}>A</Avatar><Typography variant="body2" className={classes.answers}>Specify Allowed Methods in Advanced tab of HTTP Listener connector</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"b",2)} selected={this.state.answers[2]==="b"}>
                        <Avatar aria-label="B" className={classes.avatar}>B</Avatar><Typography variant="body2" className={classes.answers}>Change HTTP Listener config</Typography>
                        </ListItem>
                        <ListItem button onClick={event=>this.handleListItemClick(event,"c",2)} selected={this.state.answers[2]==="c"}>
                        <Avatar aria-label="B" className={classes.avatar}>C</Avatar><Typography variant="body2" className={classes.answers}>Mulesoft HTTP connector cannot block HTTP methods.</Typography>
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

FirstRapiQs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FirstRapiQs);