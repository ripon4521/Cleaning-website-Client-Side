import google from '../../../../public/Grantee/Mask group (1) 1.png'
import ypCar from '../../../../public/Grantee/image 21.png'
import EcoFriendly from '../../../../public/Grantee/Daco_5403462 1.png'
import years from '../../../../public/Grantee/Isolation_Mode.png'
import certified from '../../../../public/Grantee/sAsset 1@3x 1.png'
import four from '../../../../public/Grantee/image 20.png'
import tourspiolt from '../../../../public/Grantee/Daco_5885660 1.png'

const Grantee = () => {
    const style = {
        borderRradius: '20px',
        background: 'linear-gradient(306deg, rgba(255, 255, 255, 0.80) 65.31%, rgba(122, 225, 237, 0.80) 186.6%)',
        boxShadow: '0px 11px 49px 0px rgba(32, 130, 211, 0.17)',
        backdropFilter: 'blur(20.5px)'
    }
    return (
        <div style={style}  className='flex md:w-[600px] lg:w-[1200px] mx-auto p-5 rounded-xl -mt-10 z-10 justify-center gap-2 md:gap-10 lg:gap-20 '>
            <img className='w-10 lg:w-16' src={google} alt="" />
            <img className='w-10 lg:w-16' src={ypCar} alt="" />
            <img className='w-10 lg:w-16' src={EcoFriendly} alt="" />
            <img className='w-10 lg:w-16' src={years} alt="" />
            <img className='w-10 lg:w-16' src={certified} alt="" />
            <img className='w-10 lg:w-16' src={four} alt="" />
            <img className='w-10 lg:w-16' src={tourspiolt} alt="" />
        </div>
    );
};

export default Grantee;