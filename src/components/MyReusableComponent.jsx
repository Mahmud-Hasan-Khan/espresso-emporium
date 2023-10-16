const MyReusableComponent = ({ title, subtitle }) => {
    return (
        <div className="flex items-center justify-center mt-10">
            <div>
                <p className="text-[#1B1A1A] text-xl text-center">{subtitle}</p>
                <h3 className="text-[#331A15] text-[55px] font-rancho ">{title}</h3>
            </div>
        </div>
    );
};

export default MyReusableComponent;