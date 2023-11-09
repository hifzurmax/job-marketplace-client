
import { FaJetFighter } from "react-icons/fa6";
import banner from "../../assets/home-2.jpg"
const Explore = () => {
    return (
        <div className="hero max-w-7xl mx-auto min-h-[60vh] mb-20 font-poppins" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  py-20 text-center text-neutral-content">
                <div className='max-w-3xl space-y-6'>
                    <h3 className='leading-snug text-3xl md:text-5xl font-semibold text-white'>Browse Our <span className='text-[#F7CC53]'>5,000+ </span>  Latest Jobs.</h3>
                   
                    <h2 className='text-xl font-light'>Find jobs, create trackable resumes and enrich your applications.</h2>
                    <button className="px-6 mx-auto flex gap-2 items-center py-3 text-base text-white font-bold outline-double bg-main">Explore Now <FaJetFighter></FaJetFighter></button>
                </div>
            </div>
        </div>
    );
};

export default Explore;