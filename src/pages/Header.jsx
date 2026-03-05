import React, { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import "../../src/index.css"
import { IoSearch } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
import { LuHandHelping } from 'react-icons/lu';
import { MdAssignmentInd } from 'react-icons/md';
import { IoMdCart } from 'react-icons/io';

export const Header = () => {


    const [toggle, setToggle] = useState(false);

    function sideMenu(){
        setToggle(true);
    }



    const hideSideMenu = () => {
        setToggle(false);
    }





    const links = [
        {
            icon : <IoSearch />,
            name : "Search"
        },
        {
            icon : <BiSolidOffer />,
            name : "Offers",
            sup : "New"
        },
        {
            icon : <LuHandHelping />,
            name : "Help"
        },
        {
            icon : <MdAssignmentInd />,
            name : "Sign In"
        },
        {
            icon : <IoMdCart />,
            name : "Cart"
        }
        
    ];




  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500 ' style={{
        opacity: toggle ? 1:0,
        visibility: toggle ? 'visible': 'hidden', 
    }}   onClick={hideSideMenu}>  

        <div  onClick={(e)=>{
            e.stopPropagation();
        }} 
        className='white-overlay  w-[500px] h-full absolute duration-[800ms] ' style={{
            left: toggle ? '0%' : '-100%'
        }}>
            

            </div> 
           
    </div>




    <header className=' p-12 shadow-xl sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1300px] mx-auto flex items-center'>
            <div className='w-[100px]'>
                <img className='w-full'   src='images/logo.png'/>
            </div>
            <div>
                <span className='font-bold border-b-[2px] mr-1.5'>Vaishali</span> Jaipur, Rajasthan, India <SlArrowDown onClick={sideMenu}  fontSize={25}  className='inline text-[#FF7900] ml-1.5 text-[12px] cursor-pointer'/>
            </div>


            <nav className='hidden md:flex ml-auto gap-12 list-none'>

                {
                    links.map(
                        (link, index) => {
                            return  <li className='flex items-center gap-2 cursor-pointer hover:text-[#FFA500] hover:scale-120  transition-all duration-300 ease-in-out'>
                                {link.icon}
                                {link.name}
                                <sup>{link.sup}</sup>
                            </li> 
                        }
                    )
                }
  
            </nav>

        </div>

    </header>




    </>
  )
}
