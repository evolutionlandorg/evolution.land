// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { BareProps } from '../types';

export interface Props extends BareProps {
  number: string;
}

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const MenuItem = styled.div`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.color.primary};
  margin: 0 10px;
  text-decoration: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 14px;
    margin: 0 5px;
    padding: 5px 10px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 20px;
    padding: 7px 20px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 70px;
    padding: 7px 20px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.main};
    cursor: pointer;
  }
`

const Line = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.color.primary};
  height: 20px;
`

const ModifyLine = styled.div`
  width: 4px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
 
  ${({ theme }) => theme.mediaQueries.md} {
    width: 6px;
    height: 40px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 6px;
    height: 60px;
  }
`

const NavMenu: React.FC<BareProps> = ({ className }) => {
  return <Container className={className}>
    <MenuItem as='a' href='https://docs.evolution.land/' target='_blank' rel='noopener noreferrer'>
      DOCS
    </MenuItem>
    <Line />
    <MenuItem as='a' href="https://github.com/evolutionlandorg" target='_blank' rel='noopener noreferrer'>
      GITHUB
    </MenuItem>
    <ModifyLine />
  </Container>;
};

export default NavMenu;
