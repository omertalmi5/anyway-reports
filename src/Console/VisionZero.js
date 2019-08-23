import React from 'react';
import styledComponent from 'styled-components'
import {VISION_ZERO_CONTENT} from '../constants/visionZero'
import { styled } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './VisionZero.module.css';
import { flexbox } from '@material-ui/system';

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <Typography
      component="p"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const MyTabs = styled(Tabs)({
  borderRight: `1px solid`,
  width: '225px',
  display: 'flex'
});


class VisionZero extends React.Component {
  constructor(){
    super();
    this.state = {currentTab: 0}
  }

  createTabHeaders(){
    return VISION_ZERO_CONTENT.map((content, index) => {
      return <Tab label={content.header} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`}></Tab>
    })
  }

  createTabContent(){
    const {currentTab} = this.state;
    return VISION_ZERO_CONTENT.map((content, index) => {
      return <TabPanel value={currentTab} index={index}>{content.body}</TabPanel>
    })
  }

  handleChange(val, index){
    this.setState({currentTab: index});
  }

  render() {    
    return (
      <div style={{display: 'flex', flex: '1 auto'}}>
        <MyTabs
        orientation="vertical"
        variant="scrollable"
        value={this.state.currentTab}
        onChange={this.handleChange.bind(this)}
        aria-label="Vertical tabs example"
        >
          {this.createTabHeaders()}
        </MyTabs>
      {this.createTabContent()}
      </div>
    )
  }
}

export default VisionZero;