import Banner from "../components/Banner";
import Feature from "../components/Feature";
import MyReusableComponent from "../components/MyReusableComponent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <MyReusableComponent title="Our Popular Products" subtitle="--- Sip & Savor ---"></MyReusableComponent>

        </div>
    );
};

export default Home;