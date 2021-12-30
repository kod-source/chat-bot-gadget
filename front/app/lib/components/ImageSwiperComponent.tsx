import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { ImageSwiper } from 'lib/api/Entity/ImageSwiper';
import { ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';

SwiperCore.use([Navigation, Pagination]);

interface Props {
  imageSwipers: ImageSwiper[];
}

const SwiperSlideComponent: FC<{
  imageSwiper: ImageSwiper;
  activeIndex: number;
  index: number;
  slideTo: (index: number) => void;
}> = ({ imageSwiper, activeIndex, index, slideTo }) => {
  const [hoverShowTitle, setHoverShowTitle] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setHoverShowTitle(false)}>
      <Box>
        {hoverShowTitle ? (
          <>
            <p className='absolute transition-opacity opacity-100 duration-1000 text-white text-xs border-gray-500 bg-gray-500 p-1 rounded'>
              {imageSwiper.title}
            </p>
            <p className='opacity-0'>1</p>
          </>
        ) : (
          <p className='opacity-0'>1</p>
        )}
        <div
          className={
            activeIndex === index + 1
              ? 'border-b-2 border-gray-300 mx-2'
              : 'hover:border-b-2 border-gray-200 border-opacity-70 mx-2'
          }
          onMouseEnter={() => setHoverShowTitle(true)}
          onMouseLeave={() => setHoverShowTitle(false)}
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
      </Box>
    </ClickAwayListener>
  );
};

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
          <SwiperSlideComponent
            key={imageSwiper.title}
            imageSwiper={imageSwiper}
            activeIndex={activeIndex}
            index={index}
            slideTo={slideTo}
          />
        ))}
      </div>
    </>
  );
};
