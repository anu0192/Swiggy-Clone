import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const OnlineDelivery = () => {


const [topResturent, setTopResturent] = useState([])

    const fetchTopResturent = async() => {
       const response = await fetch("/DataJSON/restaurantChains.json")
       const data = await response.json()      // wait for JSON
       setTopResturent(data)
    }

    useEffect(()=>{
        fetchTopResturent()
    }, [])



    // The filter bar will be positioned using CSS `sticky` instead of JS.
    // Removed isSticky state and scroll listener because the browser handles
    // sticking automatically when the element reaches the viewport top.


  return (
    <>
    <div className="max-w-[1400px] mx-auto pt-[110px]">
              <div className="flex items-center">
               <div className=" font-bold text-[20px] mb-2">Resturens witih online food dellivery in Jaipur</div>
            
    </div>

    <div className="m-2 max-w-[1600px] mx-auto filter-section sticky top-0 z-[99999999] bg-white w-full left-0 h-[110px] border-none rounded-md">
    <div className='p-2 flex  gap-3 pt-9'>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Filter</div>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Filter</div>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Filter</div>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Filter</div>

    </div>
    </div>
    

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                    
                    {
                      topResturent.map(
                        (d, index) =>{
                           return <Card {...d} />
                            
                        }
                      )  
                    }
                    
                    


                </div>
    </div>
    </>
  )
}
