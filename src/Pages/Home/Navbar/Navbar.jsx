import { Link } from "react-router-dom";


const Navbar = () => {
   
    return (
        <div>
            
            <div className="navbar bg-base-100 md:flex  md:justify-around">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  shadow bg-base-100 rounded-box w-52 ">
      <ul className="menu  px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Service</summary>
          <ul className="">
            <li><a>Bathtub Reglazing</a></li>
            <li><a>Bathtub Refinishing</a></li>
            <li><a>Bathtub Chip Repair</a></li>
            <li><a>Bathtub & Tiles Reglazing</a></li>
          </ul>
        </details>
      </li>
      <li><a>About Us</a></li>
      <li><a>Gallery</a></li>
      <li><a>Contact</a></li>
    </ul>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Service</summary>
          <ul className="w-[200px]">
            <li><a>Bathtub Reglazing</a></li>
            <li><a>Bathtub Refinishing</a></li>
            <li><a>Bathtub Chip Repair</a></li>
            <li><a>Bathtub & Tiles Reglazing</a></li>
          </ul>
        </details>
      </li>
      <li><a>About Us</a></li>
      <li><a>Gallery</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;