import { BsHouse, BsMap } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';

export function NextTrip() {
   const swiper = useSwiper();
   return (
      <Container>
         <img src="/fundo4.png" />
         <div className="content">
            <div className="left-content">
               <h1 className="left-title">Easy and Fast</h1>
               <h2 className="left-subtitle">
                  Book Your Next Trip In 3 Easy Steps
               </h2>
               <div className="left-card">
                  <div className="left-subcard">
                     <div className="left-subcard-img">
                        <img
                           className="left-subcard-img"
                           src="/Group 12.png"
                        ></img>
                     </div>
                     <a className="left-subcard-title">Choose Destination</a>
                     <a className="left-subcard-subtitle">
                        Lorem ipsum dolor sit amet, consectetu
                     </a>
                  </div>

                  <div className="left-subcard">
                     <div className="left-subcard-img">
                        <img
                           className="left-subcard-img"
                           src="/Group 11.png"
                        ></img>
                     </div>
                     <a className="left-subcard-title">Make Payment</a>
                     <a className="left-subcard-subtitle">
                        Lorem ipsum dolor sit amet, consectetu
                     </a>
                  </div>

                  <div className="left-subcard">
                     <div className="left-subcard-img">
                        <img
                           className="left-subcard-img"
                           src="/Group 7.png"
                        ></img>
                     </div>
                     <a className="left-subcard-title">
                        Reach Airport on Selected Date
                     </a>
                     <a className="left-subcard-subtitle">
                        Lorem ipsum dolor sit amet, consectetu
                     </a>
                  </div>
               </div>
            </div>



            <Swiper
               modules={[Autoplay, Pagination]}
               spaceBetween={100}
               slidesPerView={1}
               pagination={{ clickable: true }}
               className="swiper"
               autoplay={true}
               data-swiper-autoplay="2000"
            >
               <SwiperSlide  className="swiper-slide">
                  <div className="right-card-img">
                     <img
                        className="right-card-img"
                        src="/img11.png"
                     ></img>
                  </div>
                  <a className="right-title">Trip To Greece</a>
                  <a className="right-subtitle">14-29 October | by Robbin</a>
                  <div className="right-icons">
                     <BsMap color="black"></BsMap>{' '}
                     <FaTelegramPlane color="black"></FaTelegramPlane>
                  </div>
                  <div className="right-footer">
                     <BsHouse></BsHouse>8 People
                  </div>
               </SwiperSlide>
               
               <SwiperSlide className="swiper-slide">
                  <div className="right-card-img">
                     <img
                        className="right-card-img"
                        src="/img12.png"
                     ></img>
                  </div>
                  <a className="right-title">Trip To Rio de Janeiro</a>
                  <a className="right-subtitle">10-25 February | by Thomas</a>
                  <div className="right-icons">
                     <BsMap color="black"></BsMap>{' '}
                     <FaTelegramPlane color="black"></FaTelegramPlane>
                  </div>
                  <div className="right-footer">
                     <BsHouse></BsHouse>12 People
                  </div>
               </SwiperSlide>

               <SwiperSlide className="swiper-slide">
                  <div className="right-card-img">
                     <img
                        className="right-card-img"
                        src="/img13.png"
                     ></img>
                  </div>
                  <a className="right-title">Trip To Paris</a>
                  <a className="right-subtitle">23-04 July | by Marcos</a>
                  <div className="right-icons">
                     <BsMap color="black"></BsMap>{' '}
                     <FaTelegramPlane color="black"></FaTelegramPlane>
                  </div>
                  <div className="right-footer">
                     <BsHouse></BsHouse>8 People
                  </div>
               </SwiperSlide>

               <SwiperSlide className="swiper-slide">
                  <div className="right-card-img">
                     <img
                        className="right-card-img"
                        src="/img14.png"
                     ></img>
                  </div>
                  <a className="right-title">Trip To Germany</a>
                  <a className="right-subtitle">14-29 October | by Robbin</a>
                  <div className="right-icons">
                     <BsMap color="black"></BsMap>{' '}
                     <FaTelegramPlane color="black"></FaTelegramPlane>
                  </div>
                  <div className="right-footer">
                     <BsHouse></BsHouse>8 People
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </Container>
   );
}
