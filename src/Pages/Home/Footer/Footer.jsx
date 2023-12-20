

import Line from "../../../../public/Gallery/Line.png";
import FooterContent from "./FooterContent";
import FooterMap from "./FooterMap";
const Footer = () => {
    const gradientStyle = {
        background: 'linear-gradient(99deg, rgba(130, 232, 255, 0.08) -0.01%, rgba(130, 232, 255, 0.42) 24.22%, rgba(130, 232, 255, 0.63) 39.64%, #0A85EA 69.96%)',
        
      };
    return (
        <div  >
             <div className="my-10">
        <h2 className="text-4xl mt-32  font-jost  text-center font-semibold text-[#2082D3] ">
        Contact
        </h2>
        <img src={Line} className="mx-auto" alt="" />
      </div>
      <div className="pt-10" style={gradientStyle} >
      <FooterMap></FooterMap>
      <FooterContent></FooterContent>
      <p className="text-center font-popins font-semibold ">Copyright by Ripon Khan || 2023. All Rights Reserved. Terms of UsePrivacy Policy</p>
      </div>
          
        </div>
    );
};

export default Footer;