// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { BareProps } from '../types';
import topPointer from './images/top.png';
import readLine from './images/read.png';
import unreadLine from './images/unread.png';

export interface Props extends BareProps {
  swiperIndex: number;
}

const StyledNavBarBox = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -124px;
  left: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 4px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: -174px;
    left: 60px;
  }
`;

const TopPointer = styled.img`
  width: 8px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 16px;
  }
`

const StyledLine = styled.img`
  width: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 18px;
  }
`

const Line: React.FC<{ baseIndex: number, currentIndex: number }> = ({ baseIndex, currentIndex }) => {
  if (currentIndex >= baseIndex) return <StyledLine src={readLine} />;

  return <StyledLine src={unreadLine} />;
}
const NavBar: React.FC<Props> = ({ className, swiperIndex }) => {
  return <StyledNavBarBox>
    <TopPointer src={topPointer} />
    <Line baseIndex={1} currentIndex={swiperIndex} />
    <Line baseIndex={2} currentIndex={swiperIndex} />
    <Line baseIndex={3} currentIndex={swiperIndex} />
    <Line baseIndex={4} currentIndex={swiperIndex} />
  </StyledNavBarBox>;
};

export default NavBar;
