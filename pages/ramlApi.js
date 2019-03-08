import PropTypes from 'prop-types';
import Appbar from '../components/appBar';
import { Grid, List, ListItem, ListItemText, Link, withStyles, ListSubheader, Typography, Paper, Divider } from '@material-ui/core';
import fetch from 'isomorphic-unfetch'
import Info from '@material-ui/icons/Info';
import RamlApiQs from '../components/ramlApiQs';
import { Buffer } from 'buffer';

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
    note: {
      backgroundColor:'#d9dee2',
  },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    VertImg: {
      height: 400,
      maxWidth: '400%',
      overflow: 'hidden',
      display: 'block',
      width: 'auto;'
    },
    HorImg: {
      height:'auto',
      maxWidth:'100%',
      overflow: 'hidden',
      display: 'block',
      width: '400'
    }
  });

  const RamlAPI = (props) => {
      const {classes} = props;
      return (
      <div className={classes.root}>
        <Appbar></Appbar>
        <Grid container alignItems="stretch" direction="row" justify="flex-start" spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item lg={8}>
                <a name="background"></a>
                    <Typography variant="overline">Design First Approach</Typography>
                    <Typography paragraph={true}>
                      {Buffer.from(props.introduction,'base64').toString()}
                      <Link href="https://blogs.mulesoft.com/dev/api-dev/api-best-practices-series-spec-driven-development/">This is considered as one of the API best practices - Spec driven development</Link>
                    </Typography>
                <a name="api_contract"></a>
                    <Typography variant="overline">API Contract</Typography>
                    <Typography paragraph={true}>
                      Mulesoft provides support to both Swagger and RAML files. In this trail we are going to look at RAML file. RAML files are always written in YAML but Swagger (2.0) files can be written in JSON or YAML.
                    </Typography>
                    <img src="/static/RamlSnapshot.jpg" className={classes.VertImg}/>
                    <Typography variant="button"><Link href="/static/Accounts.raml">Download RAML</Link></Typography>
                    <Typography paragraph={true}>
                    In above snapshot you can see the different parts of RAML file. First line always defines the RAML version, which is 1.0 (RAML 0.8 is deprecated and should not be used). As a developer, we should focus on <b>protocols, security schemes, base URI and types</b> defined for that API. In this case we are using HTTP protocol and there are two different types defined-account and error. It also defines "/accounts" as a resource of the API and an HTTP method to access it. It means we can make a GET call to http://&lt;baseUri>/accounts.
<br/><p>Also RAML file clearly defines the structure of the response in case of HTTP code 200, 400 and 500. For the purpose of simplicity and demonstration we will be only considering three response codes. In case of 200 API returns JSON response containing an array of type "Account" and in other cases API returns JSON response containing array of "error" type. This way consumers clearly understand what response to expect in case of success and failures which was not defined in simple Salesforce API trail.</p>
                    </Typography><br/>
                <a name="ApiKit_Flows"></a>
                    <Typography variant="overline">APIKit Flows</Typography>
                    <Typography paragraph={true}>
                    To handle all the HTTP code scenarios and also handle all the success scenarios mentioned in the RAML file, we will have to create multiple flows and add routing logic in between the flows. That is where we can use APIKit plugin. APIKit takes RAML as an input and generates Mule flows based on the resources defined in the RAML file. It adds out of the box error handling, routing, validations based on the API definition. Unless API requires highly customized message structures, developers can use out of the box responses from APIKit.
<p> Go to Anypoint Studio then File->New->Mule Project->Give Project Name. Just below Runtime, you will see a checkbox under "API Implementation", click on that and give the directory path of the downloaded RAML file then click Finish.</p>
After it finishes processing you will see Accounts.xml file with Main flow, console flow and get:\accounts flow. Main flow will have APIKit Router connector with HTTP listener as inbound connector.  
Console flow is to display API console where consumers can get a complete picture of an API. The third flow is a blank flow with just a logger. Now run the Mule project by right clicking the project and after successful deployment you will see a button in Anypoint Studio to open a console as shown below.
                    </Typography>
                    <img src="/static/openConsole.jpg" className={classes.HorImg}/>
                    <br/>
                    <Paper color="primary" className={classes.note}>
                      <Info color="primary"></Info><b>Note</b><br/>Here we are locating file locally since we do not have paid Anypoint Account. Designer or architects can design RAML files in Anypoint Design Center and we can directly import RAML file from server into our local IDEs. <Link href="https://docs.mulesoft.com/apikit/4.x/start-project-task">More on this here</Link>
                    </Paper>
                <a name="salesforce_call"></a>
                    <Typography variant="overline">Connect To Salesforce</Typography>
                    <Typography paragraph={true}>
                      Now just add the components and configurations we created in last trail into the empty flow as shown below. You will have to map the Salesforce response to the API response. Mulesoft uses datasense to automatically list the request and response fields you will just have to drag and drop. e.g. Id to id and Name to name.
                    </Typography>
                    <Paper color="primary" className={classes.note}>
                      <Info color="primary"></Info><b>Note</b><br/>Note how it does not have HTTP Listener at the begining of the flow. That is because APIKit Router will route all incoming request to the mentioned flow based on resource in the URL.
                    </Paper>
                    <br/>
                    <img src="static/datasense.jpg" className={classes.HorImg}/>
                    <Typography paragraph={true}>
                      Now go back to your console and navigate to Resources->/accounts->GET and click on Try It button on the top right corner. Then click on SEND button to make actual call to the API. You should now see the accounts from your org exactly like the structure defined in the RAML file.
                    </Typography>
                    <img src="/static/ApiConsole.jpg" className={classes.HorImg}/>
                    <Paper color="primary" className={classes.note}>
                      <Info color="primary"></Info><b>Note</b><br/>All error handling in this trail is out of the box and we have not handled all error scenarios here.
                    </Paper>
                    <br/>
                <Divider />
                <div>
                  <RamlApiQs></RamlApiQs>
                </div>
                  
            </Grid>
            <Grid item sm={3} className={classes.test}>
                <List component="nav" 
                subheader={<ListSubheader component="div">Contents</ListSubheader>}>
                    <ListItem href="#background">
                        <ListItemText inset>
                            <Link href="#background">
                                <Typography variant="caption" gutterBottom>
                                    Background
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem href="#api_contract">
                        <ListItemText inset>
                            <Link href="#api_contract">
                                <Typography variant="caption" gutterBottom>
                                    API Contract
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem href="#ApiKit_Flows">
                        <ListItemText inset>
                            <Link href="#ApiKit_Flows">
                                <Typography variant="caption" gutterBottom>
                                    APIKit Flows
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem href="#salesforce_call">
                        <ListItemText inset>
                            <Link href="#salesforce_call">
                                <Typography variant="caption" gutterBottom>
                                    Connect To Salesforce
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
      </div>
  )
      }

  RamlAPI.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  RamlAPI.getInitialProps = async function() {
    const res = await fetch('https://api.github.com/repos/okulkarni3/mtrahead/contents/ramlApiDocs/introduction.txt');
    const data = await res.json();
    return {
        introduction: data.content.replace("\n","")
    }
}


  export default withStyles(styles)(RamlAPI)