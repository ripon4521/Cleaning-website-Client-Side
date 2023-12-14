import { NavLink } from 'react-router-dom';
import logo from '../../../../public/Logo/Link → lAsset-6.png.png';


const Navbar = () => {
   
    return (
        <div>
            
            <div className="navbar bg-base-100 md:flex text-[#095090] font-semibold font-popins  md:justify-between lg:px-56">
  <div className=" flex-row-reverse  items-center">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost ml-56 md:hidden">
      
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" dropdown-content mt-3  shadow bg-base-100 rounded-box  ml-36 ">
      <ul className="menu  ">
      <NavLink><li><a>Home</a></li></NavLink>
   
     <li>
        <details>
          <summary>Service</summary>
          <ul className="font-semibold  ">
            <NavLink className='font-semibold '><li><a>Bathtub Reglazing</a></li></NavLink>
            <NavLink className='font-semibold '><li><a>Bathtub Refinishing</a></li></NavLink>
            <NavLink className='font-semibold '><li><a>Bathtub Chip Repair</a></li></NavLink>
            <NavLink className='font-semibold '><li><a>Bathtub & Tiles Reglazing</a></li></NavLink>
          </ul>
        </details>
      </li>
 
      <NavLink><li><a>About Us</a></li></NavLink>
      <NavLink><li><a>Gallery</a></li></NavLink>
      <NavLink><li><a>Contact</a></li></NavLink>
    </ul>

      </ul>
    </div>
  <img className='md:w-36 pl-5  w-28 lg:w-full' src={logo} alt="" />
  </div>

  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink><li><a>Home</a></li></NavLink>
      <li className=''>
        <details>
          <summary>Service</summary>
          <ul className="w-[200px] z-40 bg-white ">
            <NavLink><li><a className='font-semibold  '>Bathtub Reglazing</a></li></NavLink>
            <NavLink><li><a className='font-semibold  '>Bathtub Refinishing</a></li></NavLink>
          <NavLink>  <li><a className='font-semibold  '>Bathtub Chip Repair</a></li></NavLink>
          <NavLink>  <li><a className='font-semibold  '>Bathtub & Tiles Reglazing</a></li></NavLink>
          </ul>
        </details>
      </li>
    <NavLink>  <li><a>About Us</a></li></NavLink>
  <NavLink>    <li><a>Gallery</a></li></NavLink>
     <NavLink> <li><a>Contact</a></li></NavLink>
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;