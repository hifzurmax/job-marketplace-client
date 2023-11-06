import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Banner from "./Banner";
import WebDevelopment from '../../jobs/WebDevelopment';
import DigitalMarketing from '../../jobs/DigitalMarketing';
import GraphicsDesign from '../../jobs/GraphicsDesign';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div>
                <Tabs className="my-20 max-w-6xl mx-auto">
                    <TabList className="flex justify-center gap-4 cursor-pointer rounded-lg shadow-lg pt-4 bg-main text-white mx-auto max-w-4xl font-semibold">
                        <Tab className="rounded-md px-6 py-4">WEB DEVELOPMENT</Tab>
                        <Tab className="rounded-md px-6 py-4">DIGITAL MARKETING</Tab>
                        <Tab className="rounded-md px-6 py-4">GRAPHICS DESIGN</Tab>
                    </TabList>

                    <TabPanel>
                        <WebDevelopment></WebDevelopment>
                    </TabPanel>
                    <TabPanel>
                        <DigitalMarketing></DigitalMarketing>
                    </TabPanel>
                    <TabPanel>
                        <GraphicsDesign></GraphicsDesign>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;