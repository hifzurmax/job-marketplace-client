
const Banner = () => {
    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto flex items-center pl-16" style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundImage: 'url(https://i.ibb.co/ZNkB5KP/min-31.jpg)' }}>
        <div>
            <div className='mr-6 space-y-6'>
                <h1 className="text-4xl text-white font-bold">Elevate your wardrobe with</h1>
                <h1 className="text-4xl text-white bg-main w-fit p-4 font-bold">MANGO FASION</h1>
                <h3 className='text-2xl text-white'>Unleash Your Inner Elegance</h3>
                <button className="px-6 py-3 text-base text-white font-bold outline-double bg-main">Discover More</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;