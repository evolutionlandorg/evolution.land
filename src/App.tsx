import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Flex, Footer, Header, NavBar } from 'components';
import { Welcome } from 'pages/Welcome';
import { Definition } from 'pages/Definition';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel'
import { Apostle } from 'pages/Apostle';
import { Dao } from 'pages/Dao';
import { GamePlays } from 'pages/GamePlays';
import styled from 'styled-components';
import { Partners } from 'pages/Partners';

const Container = styled.div<{ swiperIndex: number }>`
  color: #ffffff;
  background: ${({ swiperIndex }) => {
    return 'linear-gradient(67.32deg, #2336D0 0%, #1C31E9 48.05%, #00C2FF 99.67%)'
  }};
  transition: background-color 1s linear;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px 60px;
  }
`

function App() {
  const [index, SetIndex] = useState(1);

  return (
    <Container swiperIndex={index}>
      <Header />
      <Flex flex={1} alignItems="center">
        <Box height="650px" width="100%">
          <Swiper
            direction="vertical"
            modules={[Mousewheel]}
            mousewheel
            spaceBetween={50}
            slidesPerView={1}
            onSlideChangeTransitionEnd={(swiper) => {

              SetIndex(swiper.activeIndex);
              // fix dont work with swiper
              const aosDom = document.querySelectorAll('.swiper-slide-active [data-aos]')
              aosDom.forEach((item) => {
                item.classList.add('aos-animate')
              })
            }}
            onSwiper={(swiper) => { }}
            style={{ height: "100%", width: "100%" }}
          >
            <SwiperSlide><Welcome /></SwiperSlide>
            <SwiperSlide><Definition /></SwiperSlide>
            <SwiperSlide><Apostle /></SwiperSlide>
            <SwiperSlide><Dao /></SwiperSlide>
            <SwiperSlide><GamePlays /></SwiperSlide>
            <SwiperSlide><Partners /></SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
      <Footer />
      <NavBar swiperIndex={index} />
    </Container>
  );
}

export default App;
