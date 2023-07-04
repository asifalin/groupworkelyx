import React from 'react'

function CardItems() {
  return (
    <div className='flex '>
   <div id="sliderContainer" className=" overflow-hidden gap-5 ">
        <ul id="slider" className="flex w-full border border-red-500">
          <li className="p-5 w-[10%] ">
            <div className="border rounded-lg  p-5 h-full">
              <h2>Some beg Heading 1</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia
                ducimus.
              </p>
              <button className="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
            </div>
          </li>
          <li className="p-5 w-[10%] bg-green-400">
            <div className="border rounded-lg p-5 h-full">
              <h2>Some beg Heading 2</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia
                ducimus.
              </p>
              <button className="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
            </div>
          </li>
          <li className="p-5 w-[10%] bg-yellow-400">
            <div className="border rounded-lg p-5 h-full">
              <h2>Some beg Heading 3</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia
                ducimus.
              </p>
              <button className="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
            </div>
          </li>
        
          <li className="p-5  bg-blue-200 w-[10%]">
            <div className="border rounded-lg p-5 h-full">
              <h2>Some beg Heading 4</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia
                ducimus.
              </p>
              <button className="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
            </div>
          </li>
          <li className="p-5  bg-blue-900 w-[10%]">
            <div className="border rounded-lg p-5 h-full">
              <h2>Some beg Heading 5</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia
                ducimus.
              </p>
              <button className="mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
            </div>
          </li>
         
        </ul>
   
       
      </div>
      </div>
  )
}

export default CardItems;
