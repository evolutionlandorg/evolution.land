// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Flex } from 'components/Box';
import React from 'react';
import styled from 'styled-components';
import { BareProps } from '../types';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;

const Header: React.FC<BareProps> = ({ className }) => {
  return <Container>
    <Logo />
    <NavMenu />
  </Container>;
};

export default Header;
