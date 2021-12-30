import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

export const ImageSwiper: FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const slideTo = (index: number) => {
    if (!swiperInstance) return;
    swiperInstance.slideTo(index);
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      loop={true}
    >
      <SwiperSlide className='text-center'>
        <Image src='/IpadPageImage.jpg' width={700} height={700} />
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        <Image src='/homeImage.png' width={700} height={700} />
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        <Image src='/macBookImage.jpg' width={700} height={700} />
      </SwiperSlide>
    </Swiper>
  );
};
