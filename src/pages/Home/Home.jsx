import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../index.css'
import Banner from "./Banner";
import WebDevelopment from '../../jobs/WebDevelopment';
import DigitalMarketing from '../../jobs/DigitalMarketing';
import GraphicsDesign from '../../jobs/GraphicsDesign';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const [webCategory, setWebCategory] = useState("Web Development");
    const [marketingCategory, setMarketingCategory] = useState([]);
    const [graphicsCategory, setGraphicsCategory] = useState([]);

    return (
        <div className='font-poppins'>
            <Helmet>
                <title>TaskHub | Home</title>
            </Helmet>
            <Banner></Banner>

            <div className='max-w-4xl mt-20 mx-auto text-center'>
                <h2 className='text-second text-3xl font-bold'>New & Random Jobs</h2>
                <p className='text-[#74788d] mt-4'>Post a job to tell us about your project. We will quickly <br /> match you with the right freelancers.</p>
            </div>

            <div>
                <Tabs className="my-10 max-w-6xl mx-auto">
                    <TabList className="flex justify-center mr-1 ml-1 pr-1 pl-1 gap-2 md:gap-4 cursor-pointer rounded-lg shadow-lg pt-4 text-center bg-main react-tabs__tab--selected:text-main text-white md:max-w-4xl md:mx-auto font-semibold text-sm">
                        <Tab
                            onClick={() => setWebCategory("Web Development")}
                            className="rounded-md px-2 md:px-6 py-4">WEB DEVELOPMENT</Tab>

                        <Tab
                            onClick={() => setMarketingCategory("Digital Marketing")}
                            className="rounded-md px-2 md:px-6 py-4">DIGITAL MARKETING</Tab>

                        <Tab
                            onClick={() => setGraphicsCategory('Graphics Design')}
                            className="rounded-md px-2 md:px-6 py-4">GRAPHICS DESIGN</Tab>
                    </TabList>

                    <TabPanel>
                        <WebDevelopment webCategory={webCategory}></WebDevelopment>
                    </TabPanel>
                    <TabPanel>
                        <DigitalMarketing marketingCategory={marketingCategory}></DigitalMarketing>
                    </TabPanel>
                    <TabPanel>
                        <GraphicsDesign graphicsCategory={graphicsCategory}></GraphicsDesign>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;