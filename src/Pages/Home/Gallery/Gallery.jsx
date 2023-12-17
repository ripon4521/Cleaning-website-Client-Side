import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../../public/Gallery/img1.png";

import Line from "../../../../public/Gallery/Line.png";
import'./gallery.css'

const Gallery = () => {
    
    var settings = {
        dots: true,
     
        speed: 500,
        slidesToShow: 4,
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
  
  return (
    <div className="lg:w-[1500px] w-[300px] md:w-[600px] mx-auto"> 
      <div className="my-20">
        <h2 className="text-5xl font-jost  text-center font-semibold text-[#2082D3] ">
          Gallery
        </h2>
        <img src={Line} className="mx-auto" alt="" />
      </div>
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
  );
};

export default Gallery;
