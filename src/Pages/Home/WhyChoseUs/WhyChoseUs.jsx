import line from "../../../../public/Gallery/Line.png";
import img1 from "../../../../public/Why Chose Use/1 21.png";
import img2 from "../../../../public/Why Chose Use/2 5.png";
import img3 from "../../../../public/Why Chose Use/3 1.png";
import img4 from "../../../../public/Why Chose Use/4 1.png";
import img5 from "../../../../public/Why Chose Use/5 1.png";
import img6 from "../../../../public/Why Chose Use/6 1.png";
import ServicesArea from "./ServicesArea";
import StillNowSection from "./StillNowSection";
const WhyChoseUs = () => {
  return (
    <div>
      <div className="text-center mt-32">
        <h1 className="text-4xl font-jost font-semibold text-[#2082D3]">
          Why Choose Us?
        </h1>
        <img className="mx-auto" src={line} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 p-3 md:p-3 lg:p-0 grid-cols-1 gap-10 my-10 max-w-6xl mx-auto">
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img1} alt="" />
            <p>Highly skilled technicians with expertise in sink reglazing, walk-in tubs, and shower refinishing.</p>
        </div>
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img2} alt="" />
            <p>Use of premium-quality materials and advanced techniques for long-lasting results.</p>
        </div>
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img3} alt="" />
            <p>Attention to detail and commitment to customer satisfaction.</p>
        </div>
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img4} alt="" />
            <p>Cost-effective alternatives to total replacements for significant savings.</p>
        </div>
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img5} alt="" />
            <p>Quick turnaround time with minimal disruption to your daily routine.</p>
        </div>
        <div className="border-2 rounded-xl text-[#095090] p-3 flex items-center gap-5">
            <img src={img6} alt="" />
            <p>Excellent customer service and support throughout the process.</p>
        </div>
        
      </div>
     
     <div className="my-20">
        <StillNowSection></StillNowSection>
        <ServicesArea></ServicesArea>
     </div>

    </div>
  );
};

export default WhyChoseUs;
