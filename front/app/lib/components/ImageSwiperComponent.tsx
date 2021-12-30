import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { ImageSwiper } from 'lib/api/Entity/ImageSwiper';

SwiperCore.use([Navigation, Pagination]);

interface Props {
  imageSwipers: ImageSwiper[];
}

export const ImageSwiperComponent: FC<Props> = ({ imageSwipers }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const slideTo = (index: number) => {
    if (!swiperInstance) return;
    swiperInstance.slideTo(index);
  };
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop={true}
      >
        {imageSwipers.map((imageSwiper) => (
          <SwiperSlide key={imageSwiper.title} className='text-center'>
            <Image
              src={imageSwiper.url}
              width={700}
              height={700}
              className='cursor-[grab] active:cursor-[grabbing]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-5 flex justify-start'>
        {imageSwipers.map((imageSwiper, index) => (
          <div
            className={
              activeIndex === index + 1
                ? 'border-b-2 border-gray-300 mx-2'
                : 'hover:border-b-2 border-gray-200 border-opacity-70 mx-2'
            }
          >
            <Image
              key={imageSwiper.title}
              src={imageSwiper.url}
              width={70}
              height={70}
              onClick={() => slideTo(index + 1)}
              className='cursor-pointer hover:opacity-70'
            />
          </div>
        ))}
      </div>
    </>
  );
};
