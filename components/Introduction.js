import React from 'react';
import { withStyles, MobileStepper, Button, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from '@material-ui/core/Link';

const tutorialSteps = [
    {
      label:  "Download Anypoint Studio from",
      imgPath: '/static/anypointStudioDownload.jpg',
      link: 'https://www.mulesoft.com/lp/dl/studio'
    },
    {
      label: 'Make sure you have JDK installed. If not you can download it from',
      imgPath:
        '/static/JdkDownload.jpg',
      link: 'https://www.oracle.com/technetwork/java/javase/downloads/index.html'
    },
    {
      label: 'Open anypoint studio. Right click inside "Package Explorer" pane->New->Mule Project. Give project name as Account',
      imgPath:
        '/static/newMsProject.jpg',
      link:''
    }
  ];

const styles = theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 350,
      maxWidth: '400%',
      overflow: 'hidden',
      display: 'block',
      width: '180%;'
    },
  });

class Introduction extends React.Component {
    state = {
          activeStep: 0,
      }
      
      handleNext = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep - 1,
        }));
      };

   render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
       <div className={classes.root}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <Typography variant="caption">
        {tutorialSteps[activeStep].label} <Link href={tutorialSteps[activeStep].link} target="_blank" rel="noopener" className={classes.link}>{tutorialSteps[activeStep].link}</Link>
        </Typography>
            <MobileStepper steps={tutorialSteps.length}
                position="static"
                activeStep = {activeStep}
                className = {classes.MobileStepper}
                nextButton={
                    <Button size="small" onClick={this.handleNext} disabled={activeStep == tutorialSteps.length-1}> Next 
                        <KeyboardArrowRight/>
                    </Button> 
                }
                backButton = {
                    <Button size="small" onClick={this.handleBack} disabled = {activeStep == 0}>
                        <KeyboardArrowLeft/> Back
                    </Button>
                }
                >

            </MobileStepper>
        </div>
    )
};
}

Introduction.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Introduction);