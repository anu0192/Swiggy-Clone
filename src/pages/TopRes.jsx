import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Card } from "./Card"
import { useEffect, useState } from "react"

export const TopRes = () => {  

    const [data, setData] = useState([])

    const fetchTopResturent = async() => {
       const response = await fetch("/DataJSON/restaurantChains.json")
       const apiData = await response.json()  
       setData(apiData)
    }

    useEffect(()=>{
        fetchTopResturent()
    }, [])




    return(
       <>
       <div className="max-w-[1200px] mx-auto pt-[15px]">
              <div className="flex items-center">
               <div className=" font-bold text-[20px]  ">Top resturant chains in Jaipur</div>
       
               <div className=" flex ml-auto ">
                   <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#E5E7EB] rounded-full mr-[5px] "><FaArrowLeft  /></div>
                   <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#E5E7EB] rounded-full"><FaArrowRight  /></div>
       
               </div>
              </div>

                <div className="flex p-2 gap-2 justify-center overflow-hidden ">
                    
                    {
                      data.map(
                        (d, index) =>{
                           return <Card {...d} key={index} />
                            
                        }
                      )  
                    }
                    
                    


                </div>
            <hr className="my-2 border-[1px] border-[#D3D3D3]"/>


              </div>
       </>
    )
}