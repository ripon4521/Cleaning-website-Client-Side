import Banner from "../Banner/Banner";
import Grantee from "../Grantee/Grantee";
import Navbar from "../Navbar/Navbar";
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
        </div>
    );
};

export default Home;