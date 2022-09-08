import Logo from "../public/logo.png";
import Image from "next/image";

const styles = {};

const Header = () => {
  return (
    <header className='h-14 bg-[#343A40] flex justify-between items-center px-20 py-3 font-bold text-lg text-gray-400 '>
      <div className='logo text-2xl font-bold'>albratross</div>

      <nav className='flex gap-10'>
        <div>
          <div className='hover:text-white'>
            <i className='fas fa-shopping-cart mr-2'></i>
            Cart
          </div>
        </div>

        <div>
          <div className='hover:text-white'>
            <i className='fas fa-user mr-2'></i>Sign in
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
