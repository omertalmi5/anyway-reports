import React, {useEffect, useState} from 'react';
import './App.scss';
import AppBar from "@material-ui/core/AppBar";
import Report from './Console/Report';
import SubscribeBar from './Console/SubscribeBar';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: "#f9f9f9",
    },
    bottomBar: {
      top: "auto",
      bottom: 0,
      backgroundColor: "#f9f9f9",
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: "none"
    },
    logo: {
      height: "30px",
      marginRight: "0px",
    },
    content: {}
  }));

function getData(url, callback) {
    return () => {
        axios.get(url)
            .then(function (response) {
                callback(response.data)
            })
    };
}

function App() {
    const [schoolsMetaData, setSchoolsMetaData] = useState(null);
    const [selectedId, setSelectedId] = React.useState('540211');

    useEffect(getData('https://anyway.co.il/api/schools-names', setSchoolsMetaData), []);
    const classes = useStyles();
    return (
        <div className="App">
            <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar variant="dense">
            <a href="anyway.co.il"><img src="images/anyway.png" alt="Anyway" className={classes.logo} /></a>
            {/*<SubscribeBar schoolId={selectedId}/>*/}
          </Toolbar>
        </AppBar>
            <Report schools={schoolsMetaData} selectedId={selectedId} setSelectedId={setSelectedId}/>
         <AppBar
          position="fixed"
          className={classes.bottomBar}
        >
          <Toolbar variant="dense">
            <div className='anyway-footer'>
                <a href="http://www.hasadna.org.il/" title="לדעת להשפיע - מבית הסדנא לידע ציבורי">
                    <img className='hasadna-logo' src="images/hasadna.png" alt="לוגו של הסדנה" />
                </a>
                <a className='hasadna-links' href="https://www.jgive.com/new/he/ils/donation-targets/3268"
                target="new">תרמו לנו</a>
                <a className='hasadna-links' href="mailto:feedback@anyway.co.il?subject=ANYWAY%20Feedback" target="new">צרו קשר</a>
            </div>
          </Toolbar>
        </AppBar>
        </div>
    );
}

export default App;
