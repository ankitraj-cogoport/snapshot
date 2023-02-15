import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Header from './Header';
import { Container, TabContainer } from './styles';

function Home() {
    const [activeTab, setActiveTab] = useState('');

    return (
        <Container>
            <Header />
            <TabContainer>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Pricing</Tab>
                        <Tab>Online Albums</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </TabContainer>
        </Container>
    )
};

export default Home;