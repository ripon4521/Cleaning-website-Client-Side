import img1 from '../../../../public/Testimonials/img3.jpg'
import img2 from '../../../../public/Testimonials/Mask group (1) 1.png'

const TestimonailsCard = () => {
    return (
        <div>
            <div className='flex  items-center justify-between  '>
                <img className='w-16 rounded-full' src={img1} alt="" />
                <p className='text-xl font-jost font-semibold'>Rk Ripon Khan</p>
                <img  src={img2} alt="" />
            </div>
            <p>I searched “bathtub reglazing near me” they showed up with couple of other companies, I  made a quick call and asked all the question I had in my mind they answered all my long questiosn regarding bathtub reglazing with welcoming tone. Eventually, I decided to go with them because of their competitive well price. One of their  tub painters arrived next day to my home in Toronto and he cleaned the old enamel paint from my fibreglass bathtub. It took 3 hours to get it done and I am now just Wow!</p>
        </div>
    );
};

export default TestimonailsCard;