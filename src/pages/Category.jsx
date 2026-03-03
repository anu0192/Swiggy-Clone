import { useEffect, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const Category = () =>{

        const [categories, setCategories] = useState([])
         const fetchCategory = async() => {
                 const res = await fetch("/DataJSON/category.json")
                 const data  = await res.json()
                 setCategories(data)
         }  


         useEffect(() => {
            fetchCategory()

         }, [])


         const [slide, setSlide] = useState(0)

         const rightSlide = () => {
            console.log(categories.length)
            if(categories.length - 8 == slide ) return false;
            setSlide(slide + 4)
         }

         const leftSlide = () => {
            if(slide == 0)return false;
            setSlide (slide - 4)
         }
            
         


    return(
       <>
       <div className="max-w-[1200px] mx-auto pt-[15px]">
       <div className="flex items-center">
        <div className=" font-bold text-[20px] ">What's on your mind?</div>

        <div className=" flex ml-auto ">
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#E5E7EB] rounded-full mr-[5px] "><FaArrowLeft onClick={leftSlide} /></div>
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#E5E7EB] rounded-full"><FaArrowRight onClick={rightSlide} /></div>

        </div>
       </div>

            <div className="flex overflow-hidden">
                {
                    categories.map((cat, index) => {
                        return(<div style={{transform: `translateX(-${slide * 100}%)`} } className=" w-[150px] shrink-0 flex-grow-1 duration-500"><img src={"/images/" + cat.image} alt="" /></div>) 
                    }

                    )
                }
            </div>

            <hr className="my-2 border-[1px] border-[#D3D3D3]"/>
            </div>


       </>
    )
} 