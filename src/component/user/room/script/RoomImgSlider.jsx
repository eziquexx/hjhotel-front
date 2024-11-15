// import React from "react";
// import '../css/RoomImgSlider.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// export default function RoomImgSlider() {
//     const slideImages = [
//         '/assets/images/Room/room_deluxe_1.jpg',
//         '/assets/images/Room/room_deluxe_2.jpg',
//         '/assets/images/Room/room_deluxe_3.jpg',
//         '/assets/images/Room/room_deluxe_4.jpg',
//         '/assets/images/Room/room_deluxe_5.jpg',
//     ];

//     return (
//         <div>
//         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-indicators">
//                 {slideImages.map((_, index) => (
//                     <button
//                         key={index}
//                         type="button"
//                         data-bs-target="#carouselExampleIndicators"
//                         data-bs-slide-to={index}
//                         className={index === 0 ? "active" : ""}
//                         aria-current={index === 0 ? "true" : "false"}
//                         aria-label={`Slide ${index + 1}`}
//                     ></button>
//                 ))}
//             </div>
//             <div className="carousel-inner">
//                 {slideImages.map((image, index) => (
//                     <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
//                         <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
//                     </div>
//                 ))}
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>

// <Carousel>
// <Carousel.Item>
//   <ExampleCarouselImage text="First slide" />
//   <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <ExampleCarouselImage text="Second slide" />
//   <Carousel.Caption>
//     <h3>Second slide label</h3>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <ExampleCarouselImage text="Third slide" />
//   <Carousel.Caption>
//     <h3>Third slide label</h3>
//     <p>
//       Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//     </p>
//   </Carousel.Caption>
// </Carousel.Item>
// </Carousel>
// </div>

        
//     );
// }


