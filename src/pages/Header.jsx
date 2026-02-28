import React, { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import "../../src/index.css"

export const Header = () => {


    const [toggle, setToggle] = useState(false);

    function sideMenu(){
        setToggle(true);
    }



    const hideSideMenu = () => {
        setToggle(false);
    }


  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500 ' style={{
        opacity: toggle ? 1:0,
        visibility: toggle ? 'visible': 'hidden', 
    }}   onClick={hideSideMenu}>  

        <div className='white-overlay  w-[500px] h-full absolute duration-[800ms] ' style={{
            left: toggle ? '0%' : '-100%'
        }}>
            

            </div> 
           
    </div>




    <header className='p-12 shadow-xl'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className='w-[100px] border border-red-500'>
                <img className='w-full'   src='images/logo.png'/>
            </div>
            <div className='border border-blue'>
                <span className='font-bold border-b-[2px] mr-1.5'>Vaishali</span> Jaipur, Rajasthan, India <SlArrowDown onClick={sideMenu}  fontSize={25}  className='inline text-[#FF7900] ml-1.5 text-[12px] cursor-pointer'/>
            </div>

        </div>
    </header>
    </>
  )
}
