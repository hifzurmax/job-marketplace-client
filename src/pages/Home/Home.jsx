import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tabs>
                <TabList className='flex gap-6 border justify-around'>
                    <Tab className='border'>WEB DEVELOPMENT</Tab>
                    <Tab className='border'>DIGITAL MARKETING</Tab>
                    <Tab className='border'>GRAPHICS DESIGN</Tab>
                </TabList>

                <TabPanel>
                    <p>
                        <b>Mario</b> is a fictional character in the Mario video
                        game franchise, owned by Nintendo and created by Japanese video game designer
                        Shigeru Miyamoto. Serving as the mascot and the eponymous protagonist
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Luigi</b> 
                        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                       
                    </p>
                    
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Princess Peach</b> 
                        is a character inMario franchise. Originally created by Shigeru Miyamoto,
                       
                    </p>
                </TabPanel>
                
             
            </Tabs>
        </div>
    );
};

export default Home;