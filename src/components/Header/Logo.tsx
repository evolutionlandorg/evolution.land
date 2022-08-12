// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Box, Flex } from 'components/Box';
import React from 'react';
import styled from 'styled-components';
import { BareProps } from '../types';

const LineGreen = styled(Box)`
  width: 20px;
  height: 4px;
  background: ${({ theme }) => theme.bg.logo};

  ${({ theme }) => theme.mediaQueries.md} {
    width: 25px;
    height: 6px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 38px;
    height: 6px;
  }
`

const LineWhite = styled(Box)`
  width: 100px;
  height: 4px;
  background: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.mediaQueries.md} {
    width: 150px;
    height: 6px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 230px;
    height: 6px;
  }
`

const Title = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 30px;
  }
`

const Logo: React.FC<BareProps> = ({ className }) => {
  return <div className={className}>
    <Flex>
      <LineGreen />
      <LineWhite ml="1rem" />
    </Flex>
    <Title href='/'>EVOLUTION LAND</Title>
  </div>;
};

export default Logo;
