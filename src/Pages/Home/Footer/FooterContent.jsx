
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../../../../public/Logo/Link → lAsset-6.png.png'
const FooterContent = () => {
    return (
        <div className='my-20 container mx-auto flex flex-col md:flex-row justify-start lg:gap-20 gap-10 pl-5 md:p-3 lg:pl-0 md:gap-8'>
            <div>
        <img src={logo} alt="" />
        <p className='font-popins font-semibold'>Revitalize your bathtub in Toronto, Hamilton,<br />
and Mississauga with professional bathtub
reglazing services.</p>
            </div>

            <div>
             <h3 className='text-xl font-popins font-semibold '>Quick Links</h3>

             <ul>
                <li className='font-popins mt-2 font-semibold'>Home</li>
                <li className='font-popins font-semibold'>About</li>
                <li className='font-popins font-semibold'>Gallery</li>
                <li className='font-popins font-semibold'>Contact</li>
             </ul>
             
            </div>

            <div>
             <h3 className='text-xl font-popins font-semibold '>Our Service</h3>

             <ul>
                <li className='font-popins mt-2 font-semibold'>Bathtub Reglazing</li>
                <li className='font-popins font-semibold'>Bathtub Refinishing</li>
                <li className='font-popins font-semibold'>Bathtub Chip Repair</li>
                <li className='font-popins font-semibold'>Bathtub & Tiles Reglazing</li>
             </ul>
             
            </div>
            <div className='flex md:flex-col lg:flex-row flex-row text-3xl text-white gap-5'>
                <p><FaFacebook></FaFacebook></p>
                <p><FaInstagram></FaInstagram></p>
                <p><FaLinkedin></FaLinkedin></p>
                <p><FaTwitter></FaTwitter></p>
                <p><FaWhatsapp></FaWhatsapp></p>
                <p><FaYoutube></FaYoutube></p>
            </div>



        </div>
    );
};

export default FooterContent;