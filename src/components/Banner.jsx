const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${"https://i.ibb.co/WpWvf5N/3.png"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '800px',
        }}>
            <div className="lg:w-[610px] ml-2 lg:ml-[450px] ">
                <h1 className="text-white text-5xl font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-base text-white mt-4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="bg-[#E3B577] font-rancho px-5 py-2 text-2xl mt-5">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;