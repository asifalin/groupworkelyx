import React, { useState } from 'react'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'

export default function Carsolus({children: slides}) {
 const [curr , setCurr] = useState(0)
 const prev = ()=> 
 setCurr(curr =>curr===0? slides.length- 1 :curr - 1)
 const Next = ()=>
 setCurr(curr => curr=== slides.length- 1 ? 0 :curr + 1)

    return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white'>
            <BsArrowLeftShort size={40}/>
        </button>
        <button onClick={Next} className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white'>
            <BsArrowRightShort size={40}/>
        </button>
      </div>
      
      {/* ===============buttom buttons================ */}
      <div className='absolute bottom-4 right-0 left-0'>
      <div className='flex items-center justify-center gap-2'>
        {slides.map((_ ,i) =>
        <div className={` transition-all w-3 h-3 bg-white rounded-full ${curr===i ? "p-2": "bg-opacity-50"}
        `}/>
        )}
      </div>

      </div>
            {/* ===============buttom buttons================ */}


    </div>
  )
}
