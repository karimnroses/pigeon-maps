import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react'
import MyMap from './MyMap';

const MyTabs = () => {
  return (
    <Tabs>
    <TabList>
      <Tab>Zuhause</Tab>
      <Tab>Woher komme ich</Tab>
      <Tab>Wo ich wohne</Tab>
    </TabList>

    <TabPanel>
        <h>hallo</h>
      <MyMap geo = {[34.26268698709094, -6.582770279028559]}/>
    </TabPanel>
    <TabPanel>
     <MyMap geo={[31.5204236909155, -5.530164159358338]}/>
    </TabPanel>
    <TabPanel>
     <MyMap geo={[50.93794182893019, 6.979342661266711]}/>
    </TabPanel>
  </Tabs>
  )
}

export default MyTabs