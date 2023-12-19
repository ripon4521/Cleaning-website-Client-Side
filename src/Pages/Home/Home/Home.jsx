import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Gallery from "../Gallery/Gallery";
import Grantee from "../Grantee/Grantee";
import Mokup1 from "../MockupSection/Mokup1";
import Navbar from "../Navbar/Navbar";
import Renul from "../RenaulSection/Renul";
import TopHeader from "../TopHeader/TopHeader";
import TrustUs from "../TrustUs/TrustUs";


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
        </div>
    );
};

export default Home;