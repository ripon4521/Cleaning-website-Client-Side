import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Gallery from "../Gallery/Gallery";
import Grantee from "../Grantee/Grantee";
import Mokup1 from "../MockupSection/Mokup1";
import Navbar from "../Navbar/Navbar";
import Renul from "../RenaulSection/Renul";
import Testimonials from "../Testimonials/Testimonials";
import TopHeader from "../TopHeader/TopHeader";
import TrustUs from "../TrustUs/TrustUs";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";


const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            <Banner></Banner>
            <Grantee></Grantee>
            <TrustUs></TrustUs>
            <Gallery></Gallery>
            <Renul></Renul>
            <Cards></Cards>
            <Mokup1></Mokup1>
            <WhyChoseUs></WhyChoseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;