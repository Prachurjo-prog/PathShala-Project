import Hero from "../Hero/Hero";
import PopularityPage from "../Hero/Popularity";
import ScrollingPage from "../Hero/ScrollingPage";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <ScrollingPage/>
            <PopularityPage/>
            <Footer/>
        </div>
    );
};

export default HomePage;