import React from 'react';
import { styled } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './VisionZero.scss';

import {VISION_ZERO_CONTENT} from '../constants/visionZero'

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%'}}
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
        let id = `vertical-tab-${index}`;
        return <Tab label={content.header} id={id} key={id} aria-controls={`vertical-tabpanel-${index}`}></Tab>
    })
  }

  createTabContent(){
    const {currentTab} = this.state;
    return VISION_ZERO_CONTENT.map((content, index) => {
      return <TabPanel value={currentTab} index={index} key={index}>
        <div>
      {content.image ? <img src={`images/${content.image}`} height='250px' alt={content.alt} style={{float:'right', paddingLeft:'10px'}}/> : null}
      <span>{content.body}</span>
      </div>
      </TabPanel>
    })
  }

  handleChange(val, index){
    this.setState({currentTab: index});
  }

  render() {
    return (
      <div className="vision-zero">
        <div className="title">דרכים לשיפור הבטיחות בדרכים על פי חזון אפס /דרור רשף</div>
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
      </div>
    )
  }
}

export default VisionZero;
