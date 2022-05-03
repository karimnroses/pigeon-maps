import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react'
import MyMap from './MyMap';

const MyTabs = () => {
  return (
      <>
      <h1>Meine Städte</h1>
    <Tabs>
    <TabList>
      <Tab><h4>Zuhause</h4></Tab>
      <Tab><h4>Woher komme ich</h4></Tab>
      <Tab><h4>Wo ich wohne</h4></Tab>
    </TabList>

    <TabPanel>
        <h3>Kénitra - Marokko</h3>
      <MyMap geo = {[34.26268698709094, -6.582770279028559]}/>
    </TabPanel>
    <TabPanel>
    <h3>Tinghir - Marokko</h3>
     <MyMap geo={[31.5204236909155, -5.530164159358338]}/>
    </TabPanel>
    <TabPanel>
    <h3>Köln - Deutschland</h3>
     <MyMap geo={[50.93794182893019, 6.979342661266711]}/>
    </TabPanel>
  </Tabs>
  </>
  )
}

export default MyTabs