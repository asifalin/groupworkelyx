// import React from 'react';
// // import './style'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';


// function Arrows() {
   
//   const renderSlides = () =>
//     [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//       <div className=' bg-red-400'key={num}>
//         <h3 className=' bg-blue-600 w-40'>Slide {num}</h3>
//       </div>
//     ));


//   return (
//     <div className='' >
//      <div className='flex justify-between'>
//     <div className='bg-amber-600 '>
//         <button>prev</button>
//     </div>
     
//     <div className='bg-blue-800'>
//         <button>next</button>
//     </div>

//     </div>
//      <div className="Arrow ">
//         <Slider dots={true}>{renderSlides()}</Slider>
//       </div>
//     </div>
//   );
// }

// export default Arrows;
// import React, { Component } from 'react';
// import Slider from '@bit/akiran.react-slick.slider';

// export default class CenterMode extends Component {
// 	render() {
// 		const settings = {
// 			className: "center",
// 			centerMode: true,
// 			infinite: true,
// 			centerPadding: "60px",
// 			slidesToShow: 3,
// 			speed: 500
// 		};
// 		return (
// 			<div className="container">
// 				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
// 				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
// 				<style>{cssstyle}</style>
// 				<h2>Center Mode</h2>
// 				<Slider {...settings}>
// 					<div>
// 						<h3>1</h3>
// 					</div>
// 					<div>
// 						<h3>2</h3>
// 					</div>
// 					<div>
// 						<h3>3</h3>
// 					</div>
// 					<div>
// 						<h3>4</h3>
// 					</div>
// 					<div>
// 						<h3>5</h3>
// 					</div>
// 					<div>
// 						<h3>6</h3>
// 					</div>
// 				</Slider>
// 			</div>
// 		);
// 	}
// }

// const cssstyle = `
// .container {
//   margin: 0 auto;
//   padding: 0px 40px 40px 40px;
//   width: 400px;
// }
// h3 {
//     background: #5f9ea0;
//     color: #fff;
//     font-size: 36px;
//     line-height: 100px;
//     margin: 10px;
//     padding: 2%;
//     position: relative;
//     text-align: center;
// }
// .slick-next:before, .slick-prev:before {
//     color: #000;
// }
// .center .slick-center h3 {
//     color: #e67e22;
//     opacity: 1;
//     -ms-transform: scale(1.08);
//     transform: scale(1.08);
// }
// .center h3 {
//     transition: all .3s ease;
// }
// `