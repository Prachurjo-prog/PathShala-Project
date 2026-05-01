import Hero from "../Hero/Hero";
import ScrollingPage from "../Hero/ScrollingPage";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <ScrollingPage/>
            {/* <Footer/> */}
        </div>
    );
};

export default HomePage;