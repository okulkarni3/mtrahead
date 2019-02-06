import { Typography, withStyles, Paper,  Divider, Link } from "@material-ui/core";
import Info from '@material-ui/icons/Info';
import PropTypes from 'prop-types';

const styles = theme => ({
    sections: {
        border: 1
    },
    note: {
        backgroundColor:'#d9dee2',
    },
    img: {
        height: 400,
        maxWidth: '400%',
        overflow: 'hidden',
        display: 'block',
        width: '100%;'
      },
  });

function firstRestApi(props) {
    const { classes } = props;
    return (
        <div>
            <div>
            <Typography paragraph={true} variant="body2">Drag and drop HTTP listener from Mule Palette into your XML configuration file (Account.xml). At bottom of your screen, you will see Listener properties. Enter Path as "/getAccounts".
            <Paper color="primary" className={classes.note}>
                <Info color="primary"></Info><b>Note</b><br/>If you want to restrict HTTP methods, in Listener property section, click on "Advanced" and add comma separated methods <br/>e.g. GET, POST, PATCH. Mule flow will error out for incoming request with PUT method.
            </Paper>
            </Typography>
            <img src="/static/httpListener.jpg" className={classes.img}/>
            <Typography variant="body1">Now we have created entry point to our Mulesoft flow. Now users can make a GET request call to <Link target="_blank" href="http://localhost:8081/getAccounts">http://localhost:8081/getAccounts</Link></Typography>
            </div>
            <br/>
            <Divider/>
            <div>
            <a name="salesforceConfig"></a>
            <Typography variant="overline">Create Salesforce config</Typography>
            <Typography paragraph={true}>We want to get 5 accounts from the Salesforce org. Let's configure Salesforce connector config. Go to Mule Palette and search Salesforce Query and drag and drop connector just after HTTP Listener.<br/>
            Write following SOQL query inside "Salesfore Query" section of the connector properties and save flow. <Typography variant="button">select Id from Account limit 5</Typography>
            </Typography>
            <img src="/static/SalesforceQuery1.jpg" className={classes.img}/>
            <br/>
            <Typography paragraph={true} variant="body2">There is still an error in our flow. That is because we have not configured the salesforce config yet. You can see a small red cross infront of Connector Configuration. Click on the plus sign in front of the drop down and you will get a dialog box. 
            For this tutorial we will use basic authentication (Username-Password) with salesforce. We are connecting to developer edition so Authorization url will be https://login.salesforce.com/services/Soap/u/43.0<br/>
            If we were connecting to sandbox URL would be https://test.salesforce.com/services/Soap/u/43.0
            </Typography>
            <img src="/static/SalesforceConfig.jpg" className={classes.img}/>
            <br/>
            <Typography variant="body2">Enter username, password and Security token. Click Test Connection. You should get "Connection successful" message.</Typography>
            <br/>
            <Divider />
            <a name="PayloadAsJson"></a>
            <Typography variant="overline">Transform Salesforce payload to JSON payload</Typography>
            <Typography variant="body2">This is the last step of our flow! Now we successfully sent SOQL query to Salesforce. Now salesforce has returned us 5 account Ids. The format Salesforce connector has received is not human readable format. Now our web service should return JSON formatted output. To do this Mulesoft has transformation component where we can write Dataweave script. <br/>
            By using dataweave script we can transform machine readable format to human readable format.</Typography>
            <img src="/static/transformPayload.jpg" className={classes.img}/>
            <Typography variant="body2">
            Search Transform in Mule Palette and drag and drop transform component after Salesforce Query connector. Now in properties tab you can see the dataweave script written. The output format is specified as application/json which tells the connector to convert incoming payload to json mime type. 
            </Typography>
            <br/>
            <Divider />
            <a name="runntest"/>
            <Typography variant="overline">Run and Test</Typography>
            <Typography variant="body2">Right click on project and click on Run As-> Mule Application. You will see maven build started. It is building the .jar file (used to be .zip in mule 3.x). This jar file will be deployed on localhost server.</Typography>
            <Paper color="primary" className={classes.note}>
                <Info color="primary"></Info><b>Note</b><br/>You can check dependencies of a project in pom.xml.
            </Paper>
            <br/>
            <Typography variant="body2">Once application is deployed on localhost, you will see STATUS as DEPLOYED in console.</Typography>
            <img src="/static/serverDeployed.jpg" className={classes.img}/>
            <br/><br/>
            <Typography variant="body2">Now it is deployed on our localhost. The URL will be http://host:port/listenerPath. In our case it is deployed on localhost and in first step when we created http listener we gave path as "getAccounts". The URL then becomes <Link href="http://localhost:8081/getAccounts">http://localhost:8081/getAccounts</Link>. If you changed your port for some reason, you will have to replace 8081 with your port number.</Typography>
            <Typography variant="body2">You can use Postman, SOAP UI or since this is GET method, you can directly paste the URL in browser window and see the output in JSON.</Typography>
            <br/>
            <img src="/static/finalOutput.jpg" className={classes.img}/>
            <br/>
            </div>
        </div>
    );
}

firstRestApi.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(firstRestApi);