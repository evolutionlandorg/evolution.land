
// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutLeft, PageLayoutRight, PageText } from 'styled/page';
import { Button, Flex } from 'components';
import { variants } from 'components/Button/Button';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { theme } from 'styled/theme';
import { RightArrowIcon } from 'components/Svg';
import lottieJson from './lottieJson.json';
import useMatchBreakpoints from 'hooks';

const Welcome: React.FC<BareProps> = ({ className }) => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints()

  return <PageLayoutContainer>
    <PageLayoutLeft flexDirection="column" justifyContent="center">
      <PageH1 data-aos="fade-up" data-aos-duration="1500">
        WHAT IS
      </PageH1>
      <PageH1 mb="2rem" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        APOSTLE ARENA
      </PageH1>
      <PageText data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        Apostle Arena is a 1v1 turn-based game including PVE and PVP gameplays. Every ERC-721 asset can participate in the gameplay through governance.
      </PageText>
      <Flex data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1250">
        <Button onClick={(() => {
          window.open('https://arena.evolution.land', '_blank');
        })}  variant={variants.SECONDARY} endIcon={<RightArrowIcon color={theme.color.primary}/>}>Apostle Arena</Button>
      </Flex>
    </PageLayoutLeft>
    <PageLayoutRight flexDirection="column" justifyContent="center">
      <Player
        autoplay
        loop
        src={lottieJson}
        style={{ height: !isDesktop ? '300px' : '400px', width: '100%' }}
      >
        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
      </Player>
    </PageLayoutRight>
  </PageLayoutContainer>;
};

export default Welcome;
