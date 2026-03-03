import React from 'react'

export const Card = (props) => {
  return (
    <div className='w-[273px] shrink-0 grow-0'>
        <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
            <img  className=' object-cover w-full h-full' src={"/images/" + props.image} alt="" />
            <div className='absolute w-full h-full top-0 card-gradient text-white flex p-2 text-[20px] items-end uppercase font-bold tracking-tighter'>
                {props.offer}

            </div>

           

        </div>
         <div>{props.title}</div>

    </div>
  )
}
