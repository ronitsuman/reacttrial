import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";
import { IoClose } from "react-icons/io5"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div>
        {/* notification bar start here  */}
        <section className='flex relative items-center justify-center bg-blue-400 gap-3 p-2 text-white text-base sm:text-base  '>
        <  LuTicketPercent className='text-xl' />
        <p>30% off storewide — Limited time!  </p>
        <a className='flex gap-2 justify-center items-center border-b-2 hover:text-xl ' href="#">Shop Now <FaLongArrowAltRight /> </a>
        <IoClose  className='text-white absolute right-2 '/>

        </section>
        {/* notification ends heere  */}
        {/* navigation links start here  */}
        <section className='flex justify-between items-center bg-gray-100 px-40'>
            <div className="logo">
                <a href="#" className='font-semibold text-[24px]'>3legant</a>

            </div>
            <ul className='flex gap-[40px] text-base '>
                <li><a href="#" className='hover:text-lg'>Home</a></li>
                <li><a href="#" className='hover:text-lg flex justify-center items-center gap-1'>Shop <IoIosArrowDown /> </a></li>
                <li><a href="#" className='hover:text-lg flex justify-center items-center gap-1 '>Product <IoIosArrowDown /> </a></li>
                <li><a href="#" className='hover:text-lg' >Contact Us </a></li>
            </ul>
            <div className="icons flex gap-4 cursor-pointer text-lg ">
            <FaMagnifyingGlass className='flex justify-center items-center gap-1  hover:text-lg  ' />
            <FaRegUserCircle className='flex justify-center items-center gap-1 hover:text-lg  ' />
            <MdOutlineShoppingBag className='flex justify-center items-center gap-1 hover:text-lg  ' />

            </div>

        </section>
        {/* navigation ends here  */}
        
    </div>
  )
}

export default Header