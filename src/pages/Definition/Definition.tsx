
// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutLeft, PageLayoutRight, PageText } from 'styled/page';
import { Button, Flex } from 'components';
import { Player } from '@lottiefiles/react-lottie-player';
import { theme } from 'styled/theme';
import { RightArrowIcon } from 'components/Svg';
import lottieJson from './lottieJson.json';
import useMatchBreakpoints from 'hooks';

const Definition: React.FC<BareProps> = ({ className }) => {
  const { isDesktop } = useMatchBreakpoints()

  return <PageLayoutContainer>
    <PageLayoutLeft flexDirection="column" justifyContent="center">
      <Player
        autoplay
        loop
        src={lottieJson}
        style={{ height: !isDesktop ? '300px' : '400px', width: '100%' }}
      >
        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
      </Player>
    </PageLayoutLeft>
    <PageLayoutRight flexDirection="column" justifyContent="center">
      <PageH1 style={{ textAlign: 'right' }} data-aos="fade-up" data-aos-duration="1500">
        WHAT IS
      </PageH1>
      <PageH1 style={{ textAlign: 'right' }} mb="2rem" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        EVOLUTION LAND
      </PageH1>
      <PageText style={{ textAlign: 'right' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        Evolution Land is the first Metaverse+Gamefi+Cross-chain game. Evolution Land integrates various gameplays, including management, which will continuously be evolving.
      </PageText>
      <Flex justifyContent="flex-end" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1250">
        <Button onClick={(() => {
          window.open('https://portal.evolution.land', '_blank');
        })} endIcon={<RightArrowIcon color={theme.color.main} />}>Evolution Land</Button>
      </Flex>
    </PageLayoutRight>
  </PageLayoutContainer>;
};

export default Definition;
