import banner from '../../assets/home-3.jpg'
import { FaSistrix } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="hero min-h-screen font-poppins" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='max-w-3xl space-y-6'>
                    <h3 className='leading-snug md:text-5xl font-semibold text-white'>Search Between More Then <span className='text-[#F7CC53]'>10,000+</span> Open Jobs.</h3>
                    <form>
                        <div className="flex">
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 rounded-r-lg" placeholder="Search Mockups, Logos, Design Templates..." required />
                                <button type="submit" className="flex items-center gap-1 font-semibold absolute top-0 right-0 p-2.5 text-md h-full text-white bg-main rounded-r-lg focus:ring-4 focus:outline-none focus:ring-second">
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



