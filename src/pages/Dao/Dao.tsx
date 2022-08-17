
// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutLeft, PageLayoutRight, PageText } from 'styled/page';
import { Player } from '@lottiefiles/react-lottie-player';
import lottieJson from './lottieJson.json';
import useMatchBreakpoints from 'hooks';

const Dao: React.FC<BareProps> = ({ className }) => {
  const { isDesktop } = useMatchBreakpoints()

  return <PageLayoutContainer className={className}>
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
        EVOLUTION LAND
      </PageH1>
      <PageH1 mb="2rem" style={{ textAlign: 'right' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        DAO
      </PageH1>
      <PageText style={{ textAlign: 'right' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        Evolution Land is designed and developed to be a DAO owned by the community.
      </PageText>
    </PageLayoutRight>
  </PageLayoutContainer>;
};

export default Dao;
