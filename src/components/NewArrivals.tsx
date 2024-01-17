// import newArrOne from "../assets/newArrival/newArrOne.webp";
// import newArrTwo from "../assets/newArrival/newArrTwo.webp";
// import newArrThree from "../assets/newArrival/newArrThree.webp";
// import newArrFour from "../assets/newArrival/newArrFour.webp";
// import newArrFive from "../assets/newArrival/newArrFive.jpg";
// import newArrSix from "../assets/newArrival/newArrSix.jpg";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
// import Slider from "react-slick";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { FreeMode, Pagination } from "swiper/modules";

// // function NewArrivals() {
// //   const newArrivals = [
// //     {
// //       name: "Round Table Clock",
// //       price: "$40.00",
// //       color: "Black",
// //       img: newArrOne,
// //       id: 0,
// //     },
// //     {
// //       name: "Smart Watch",
// //       price: "$250.00",
// //       color: "Black",
// //       img: newArrTwo,
// //       id: 1,
// //     },
// //     {
// //       name: "Cloth Basket",
// //       price: "$80.00",
// //       color: "Mixed",
// //       img: newArrThree,
// //       id: 2,
// //     },
// //     {
// //       name: "Funny toys for babies",
// //       price: "$60.00",
// //       color: "Mixed",
// //       img: newArrFour,
// //       id: 3,
// //     },
// //     {
// //       name: "Jacket for boys",
// //       price: "$50.00",
// //       color: "Brown",
// //       img: newArrFive,
// //       id: 4,
// //     },
// //     {
// //       name: "Mountain Jacket",
// //       price: "$155.00",
// //       color: "Red",
// //       img: newArrSix,
// //       id: 5,
// //     },
// //   ];

// //   const newArrivalItem = newArrivals.map((item) => {
// //     return (
// //       <SwiperSlide>
// //         <div key={item.id}>
// //           <img src={item.img} />
// //           <h1>{item.name}</h1>
// //           <p>{item.price}</p>
// //           <p>{item.color}</p>
// //         </div>
// //       </SwiperSlide>
// //     );
// //   });
// //   return (
// //     <Swiper
// //       slidesPerView={2}
// //       spaceBetween={30}
// //       freeMode={true}
// //       pagination={{
// //         clickable: true,
// //       }}
// //       modules={[FreeMode, Pagination, Navigation]}
// //       className="mySwiper"
// //     >
// //       {newArrivalItem}
// //     </Swiper>
// //   );
// // }

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
