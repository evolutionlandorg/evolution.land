
// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutLeft, PageLayoutRight, PageText } from 'styled/page';
import { Button, Flex } from 'components';
import { variants } from 'components/Button/Button';
import { Player } from '@lottiefiles/react-lottie-player';
import { RightArrowIcon } from 'components/Svg';
import { theme } from 'styled/theme';
import useMatchBreakpoints from 'hooks';
import lottieJson from './lottieJson.json';

const Welcome: React.FC<BareProps> = ({ className }) => {
  const { isDesktop } = useMatchBreakpoints()

  return <PageLayoutContainer>
    <PageLayoutLeft flexDirection="column" justifyContent="center">
      <PageH1 data-aos="fade-up" data-aos-duration="1500">
        WELCOME TO
      </PageH1>
      <PageH1 mb="2rem" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        EVOLUTION LAND
      </PageH1>
      <PageText data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        Explore, mine, trade and govern and enjoy this planet!
      </PageText>
      <Flex data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1250">
        <Button onClick={(() => {
          window.location.href = 'https://portal.evolution.land';
        })} endIcon={<RightArrowIcon color={theme.color.main} />}>Evolution Land</Button>
      </Flex>
    </PageLayoutLeft>
    <PageLayoutRight flexDirection="column" justifyContent="center">
      <Player
        autoplay
        loop
        src={lottieJson}
        style={{ height: !isDesktop ? '300px' : '500px', width: '100%' }}
      >
        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
      </Player>
    </PageLayoutRight>
  </PageLayoutContainer>;
};

export default Welcome;
