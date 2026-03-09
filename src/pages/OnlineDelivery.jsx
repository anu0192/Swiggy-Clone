import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const OnlineDelivery = ({ hideHeader, setHideHeader }) => {


const [topRestaurant, setTopRestaurant] = useState([])

    const fetchTopRestaurant = async() => {
       const response = await fetch("/DataJSON/restaurantChains.json")
       const data = await response.json()      // wait for JSON
       setTopRestaurant(data)
    }

    useEffect(()=>{
        fetchTopRestaurant()
    }, [])
    
    const handelFilterSection = () =>{
      const filter  = document.querySelector(".filter-section")
      if(!filter) return false
      const client  = filter.getBoundingClientRect()

      if(client.top <= 0){
        setHideHeader(true)
      } else{
        setHideHeader(false)
      }

    }

    useEffect(() =>{
      window.addEventListener("scroll",handelFilterSection)
     return () => window.removeEventListener("scroll",handelFilterSection)
    }, []
  )
  


  return (
    <>
    <div className="max-w-[1200px] mx-auto pt-[15px]">
              <div className="flex items-center">
               <div className=" font-bold text-[20px] mb-2">Restaurants with online food delivery in Jaipur</div>
            
    </div>

    <div className="m-2 max-w-[1600px] mx-auto filter-section sticky top-0 bg-white z-[9999]">
    <div className='p-8 flex  gap-3 pt-9'>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Filter</div>
        <div className='rounded-md bg-slate-200 p-2 pl-4 pr-4 font-[15px]'>Sort by</div>
        

    </div>
    </div>
    

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                    
                    {
                      topRestaurant.map(
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
