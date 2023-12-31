import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../index.css'
import Banner from "./Banner";
import WebDevelopment from '../../jobs/WebDevelopment';
import DigitalMarketing from '../../jobs/DigitalMarketing';
import GraphicsDesign from '../../jobs/GraphicsDesign';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import About from './About';
import Explore from './Explore';


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


            {/*  */}
            <div className='bg-[#F8F9FC] pt-20 max-w-7xl mx-auto'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-second text-3xl font-bold'>New & Random Jobs</h2>
                    <p className='text-[#74788d] mt-4'>Post a job to tell us about your project. We will quickly <br /> match you with the right freelancers.</p>
                </div>

                <div className='max-w-6xl mx-auto pb-1'>
                    <Tabs className="my-10">
                        <TabList
                            className="flex justify-center mr-3 ml-3 pr-1 pl-1 gap-2 md:gap-4 cursor-pointer rounded-lg shadow-lg pt-1 pb-1 text-center bg-main react-tabs__tab--selected:text-main text-white outline-0 md:max-w-2xl md:mx-auto font-semibold text-sm">
                            <Tab
                                onClick={() => setWebCategory("Web Development")}
                                className="rounded-none custom1 px-2 md:px-6 py-4">
                                WEB DEVELOPMENT
                            </Tab>
                            <Tab
                                onClick={() => setMarketingCategory("Digital Marketing")}
                                className="rounded-md custom1 px-2 md:px-6 py-4">
                                DIGITAL MARKETING
                            </Tab>

                            <Tab
                                onClick={() => setGraphicsCategory('Graphics Design')}
                                className="rounded-md custom1 px-2 md:px-6 py-4">
                                GRAPHICS DESIGN
                            </Tab>
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

            {/* How it works section */}
            <About></About>
            {/* Explore Section */}
            <Explore></Explore>
        </div>
    );
};

export default Home;