import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Line from "../../../../public/Gallery/Line.png";
import'./testimonils.css'

const Testimonials = () => {
    
    var settings = {
        dots: true,
     
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
          
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(225, 252, 255, 0.22) 10.37%, rgba(122, 225, 237, 0.29) 100%)',
      };
  
  return (
    <div style={gradientStyle} className=" h-[525px]"> 
      <div className="my-20">
        <h2 className="text-4xl mt-32  font-jost  text-center font-semibold text-[#2082D3] ">
        Testimonials
        </h2>
        <img src={Line} className="mx-auto" alt="" />
      </div>
     <div className="container mx-auto mt-20 ">
     <Slider {...settings}>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
      </Slider>
     </div>
    </div>
  );
};

export default Testimonials;
