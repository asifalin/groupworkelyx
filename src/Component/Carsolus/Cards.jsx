// import React, { useState } from 'react';
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// function Cards() {
//   const slides = [
//     {
//       title: 'Slide 1',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//     {
//       title: 'Slide 2',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//     {
//       title: 'Slide 3',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//   ];
//   const [curr, setCurr] = useState(0);
   
//   const prev = () => {
//     setCurr((curr) => {
//       if (curr === -1) {
//         return slides.length - 1;
//       } else {
//         return curr +1;
//       }
//     });
//   };
  
//   const Next = () => {
//     setCurr((curr) => {
//       if (curr === slides.length - 1) {
//         return 0;
//       } else {
//         return curr + 1;
//       }
//     });
//   };
  
//   return (
//     <div className="flex">
//       <div className="w-2/12 flex items-center">
//         <div className="w-full text-right">
//           <button onClick={prev} className=" leftbtn border bg-blue-700 text-cyan-50 text-lg p-3 rounded-full mr-5">
//             <BsArrowLeftShort />
//           </button>
//         </div>
//       </div>
//       <div id="sliderContainer" className="w-10/12 overflow-hidden">
//         <ul id="slider" className="flex w-full border border-red-500">
//           {slides.map((slide, index) => (
//             <li key={index} className="p-5">
//               <div className="border rounded-lg p-5 h-full">
//                 <h2>{slide.title}</h2>
//                 <p className="mt-2 text-gray-500">{slide.content}</p>
//                 <button className="  mt-4 px-6 py-3 rounded-md bg-green-600 text-white font-bolds">Read more</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-2/12 flex items-center">
//         <div className="w-full text-left">
//           <button onClick={Next} className=" rightbtnborder bg-blue-700 text-cyan-50 text-lg p-3 rounded-full ml-5">
//             <BsArrowRightShort />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
// =================================================
// import React, { useState } from 'react';
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// const Card = () => {
//   const slides = [
//     {
//       title: 'Slide 1',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//     {
//       title: 'Slide 2',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//     {
//       title: 'Slide 3',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//     {
//       title: 'Slide 4',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint voluptates fugiat temporibus quia ducimus.',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       <div className="w-3/4">
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0 flex justify-center"
//               >
//                 <div className="bg-white rounded-lg shadow-lg p-6">
//                   <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
//                   <p className="text-gray-600">{slide.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <button
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white text-3xl p-2 rounded-full shadow-lg"
//             onClick={prevSlide}
//           >
//             <BsArrowLeftShort />
//           </button>
//           <button
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white text-3xl p-2 rounded-full shadow-lg"
//             onClick={nextSlide}
//           >
//             <BsArrowRightShort />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// ========================================================

import React, { useEffect } from 'react';
import CardItems from './CardItems'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

function Cards() {
  useEffect(() => {
    const sliderContainer = document.getElementById('sliderContainer');
    const slider = document.getElementById('slider');
    const cards = slider.getElementsByTagName('li');
    const elementsToShow = 4 ;

    const sliderContainerWidth = sliderContainer.clientWidth;
    const cardWidth = sliderContainerWidth / elementsToShow;

    slider.style.width = `${cards.length * cardWidth}px`;

    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      element.style.width = `${cardWidth}px`;
    }
  }, []);

  const prev = () => {
    const slider = document.getElementById('slider');
    const cardWidth = slider.getElementsByTagName('li')[0].clientWidth;
    const currentMarginLeft = parseInt(slider.style.marginLeft) || 0;
    const totalWidth = slider.offsetWidth;
    const containerWidth = slider.parentNode.offsetWidth;
    const minMarginLeft = containerWidth - totalWidth;
    const newMarginLeft = currentMarginLeft + cardWidth;
    
    if (newMarginLeft <= 0) {
      slider.style.marginLeft = `${newMarginLeft}px`;
    } else {
      slider.style.marginLeft = `${minMarginLeft}px`;
    }
  };
  
  const next = () => {
    const slider = document.getElementById('slider');
    const cardWidth = slider.getElementsByTagName('li')[0].clientWidth;
    const currentMarginLeft = parseInt(slider.style.marginLeft) || 0;
    const totalWidth = slider.offsetWidth;
    const containerWidth = slider.parentNode.offsetWidth;
    const maxMarginLeft = containerWidth - totalWidth;
    const newMarginLeft = currentMarginLeft - cardWidth;
    
    if (newMarginLeft >= maxMarginLeft) {
      slider.style.marginLeft = `${newMarginLeft}px`;
    } else {
      slider.style.marginLeft = '0px';
    }
  };
  

    return (
    <div className=' w-[90%]'>
   <div className='flex justify-between'>
   <div className='font-bold mt-3'>
    <h1>What Our Clients Says</h1>
   </div>
   <div className="w-2/12 flex items-center">
        <div className="w-full text-right">
          <button onClick={prev} className="border bg-blue-700 text-cyan-50 text-lg p-3 rounded-full  ">
            <BsArrowLeftShort />
          </button>
        </div>
      
      <div>
      <div className="w-full text-left">
          <button onClick={next} className="border bg-blue-700 text-cyan-50 text-lg p-3 rounded-full ml-4 ">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      </div>
   </div>
  <div>
    <CardItems/>
  </div>  
   </div>
  );
}

export default Cards;

