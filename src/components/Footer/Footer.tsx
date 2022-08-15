// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Flex } from 'components';
import { DiscordIcon, GithubIcon, MailIcon, MediumIcon, TelegramIcon, TwitterIcon } from 'components/Svg';
import useMatchBreakpoints from 'hooks';
import React from 'react';
import styled from 'styled-components';
import { BareProps } from '../types';

const Container = styled(Flex)`
  align-items: center;
  font-size: 14px;
`;

const IconBox = styled(Flex)`
  align-items: center;
  justify-content: center;
  >svg,a {
    margin: 0 10px;
  }
`;

const Footer: React.FC<BareProps> = ({ className }) => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints()

  return <Container flexDirection={isMobile ? 'column-reverse' : 'row'} justifyContent="space-between" className={className}>
    <p>© 2021 Evolution Land All Rights Reserved</p>
    <IconBox>
      <a target='_blank' rel='noopener noreferrer' href='https://github.com/evolutionlandorg/'><GithubIcon /></a>
      <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/RBeJQgfsvW'><DiscordIcon /></a>
      <a target='_blank' rel='noopener noreferrer' href='https://t.me/evolutionland9'><TelegramIcon /></a>
      <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/Evolution_Land'><TwitterIcon /></a>
      <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@evolutionland/'><MediumIcon /></a>
      <a target='_blank' rel='noopener noreferrer' href='mailto:hello@evolution.land'><MailIcon /></a>
    </IconBox>
  </Container>;
};

export default Footer;
