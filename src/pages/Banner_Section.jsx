import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export const Banner_Section = () => {

    const cities = [
      "Banglore",
      "Gurgaon",
      "Hyderabad",
      "Delhi",
      "Mumbai",
      "Pune",
      "Kolkata",
      "Chennai",
      "Ahemdabad",
      "Chandigarh",
      "Jaipur"

    ];


  return (
    <>
        <div className='mt-30'>
            <img src="/images/App_download_banner.jpg" alt="" className="w-full mb-12" />

            <div className=' max-w-[1200px] mt-16 mx-auto'>
              <h2 className='text-[25px] font-bold mb-2'>Cities with food delivery</h2>
    
            <div className=' grid grid-cols-4 gap-6'>
             { cities.map(
                (city, index) => (
                  <div 
                  key ={index} 
                  className='border border-grey-300 rounded-xl p-5 text-center font-medium cursor-pointer hover:shadow-md'>
                    Order food Online in {city}  
                    </div>
                    ))}

                    <div className='border border-grey-300 rounded-xl p-5 text-center text-orange-500 font-semibold cursor-pointer flex items-center gap-2 text-[18px] justify-center'>show more <IoIosArrowDown /></div>
              </div>
            </div>
            </div>

    </>
   
  )
}
