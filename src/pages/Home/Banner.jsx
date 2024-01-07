import banner2 from '../../assets/home-3.jpg'
import { FaSistrix } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="hero max-w-7xl mx-auto min-h-[80vh] md:min-h-screen font-poppins" style={{ backgroundImage: `url(${banner2})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='max-w-3xl space-y-6'>
                    <h3 className='leading-snug text-3xl md:text-5xl font-semibold text-white'>Search Between More Then <span className='text-[#F7CC53]'>10,000+</span> Open Jobs.</h3>
                    <form>
                        <div className="flex ">
                           
                            <button className="flex-shrink-0 z-10 hidden md:inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#74788d] bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none" type="button">
                            <select className='bg-gray-100 hover:bg-gray-200 md:text-base font-medium outline-0' name="category">
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </select>
                            </button>
                            
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block outline-0 text-second focus:border-main p-3 w-full z-20 md:rounded-r-lg" placeholder="Frontend Developer, Logo designer..." required />
                                <button type="submit" className="flex items-center gap-1 font-semibold absolute top-0 right-0 p-2.5 text-md h-full text-white bg-main md:rounded-r-lg focus:ring-4 focus:outline-none focus:ring-second">
                                    <FaSistrix></FaSistrix>
                                    <span className="text-white">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <h2 className='text-xl font-light'>Find jobs, create trackable resumes and enrich your applications.</h2>
                    <button className="px-6 py-3 text-base text-white font-bold outline-double bg-main">Discover More</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;



