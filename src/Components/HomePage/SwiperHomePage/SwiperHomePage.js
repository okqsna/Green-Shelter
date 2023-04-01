import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './SwiperHomePage.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides=[
  {
    "caption":"Дай мені шанс пережити цю війну. Я тобі дам лапу",
    "mainTxt":"На даний момент багато собак потребують евакувації з зони бойових дій. Цим якраз займаємося ми Green Shelter.",
    "pic":require('./dog1.webp'),
    "picWidth":"530px",
    "picHeight":"500px",
    "altTxt":"corgi dog"
  },
  {
    "caption":"Зараз багатьом собакам важко",
    "mainTxt":"На даний момент багато собак потребують евакувації з зони бойових дій. Цим якраз займаємося ми Green Shelter.",
    "pic":require('./dog2.webp'),
    "picWidth":"510px",
    "picHeight":"500px",
    "altTxt":"yawning dog"
  }
];

export default function SwiperHomePage() {
  return (
    <div className="SwiperHomePage">
       <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <>
        {
          slides && slides.map((item, index)=>{
            return(
              <SwiperSlide key={index} className="swiperSlide">
                <section className="content__SwiperSlide">
                  <div className="txt__SwiperSlide">
                  <div className="top__txt__SwiperSlide">
                    <p className="cap__top__txt__SwiperSlide">{item.caption}</p>
                    <p className="main__top__txt__SwiperSlide">{item.mainTxt}</p>
                  </div>
                  <div className="btn__txt__SwiperSlide">
                    <p>Знайти друга</p>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.465 14.6075C9.21 14.6975 8.79 14.6975 8.535 14.6075C6.36 13.865 1.5 10.7675 1.5 5.51745C1.5 3.19995 3.3675 1.32495 5.67 1.32495C7.035 1.32495 8.2425 1.98495 9 3.00495C9.38533 2.48436 9.88723 2.06125 10.4655 1.76951C11.0438 1.47777 11.6823 1.32552 12.33 1.32495C14.6325 1.32495 16.5 3.19995 16.5 5.51745C16.5 10.7675 11.64 13.865 9.465 14.6075Z" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  </div>
                  <section className="img__SwiperSlide">
                  <img alt={item.altTxt} src={item.pic}></img>
                </section>
                </section>
              </SwiperSlide>
            )
          })
        }
        </>
      </Swiper>
    </>
    </div>
  );
}

