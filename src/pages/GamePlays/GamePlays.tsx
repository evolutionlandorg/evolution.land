// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutContainer2 } from 'styled/page';
import { Flex, Grid } from 'components';
import { ApostleIcon, DaoIcon, FarmIcon, FurnaceIcon, MapIcon, MarketIcon } from 'components/Svg';
import SubtractImg from './image/Subtract.png';

const Container = styled(Grid)`

  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled(PageH1)`
  text-align: center;
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
    margin-bottom: 1rem;
  }
`

const ItemContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${SubtractImg}) no-repeat;
  background-size: contain;
  width: calc(343px*0.5);
  height: calc(243px*0.5);
  > svg {
    width: 40px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: calc(343px*0.6);
    height: calc(243px*0.6);
    > svg {
      width: 50px;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: calc(343px*0.6);
    height: calc(243px*0.6);
    > svg {
      width: 70px;
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: calc(343px*0.8);
    height: calc(243px*0.8);
    > svg {
      width: 80px;
    }
  }
`

const GridBox = styled.div`
  padding: 5px 0;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px 0;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 20px 0;
  }
`

const ItemTitle = styled.p`
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  margin-top: 15px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 26px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 36px;
  }
`

const GamePlays: React.FC<BareProps> = ({ className }) => {
  return <PageLayoutContainer2 className={className} height="100%" flex="1" flexDirection="column" justifyContent="center" alignItems="space-between">
    <Title>Gameplays</Title>
    <Container>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://portal.evolution.land/land/5/map' data-aos="fade-right" data-aos-duration="1500" >
          <MapIcon />
          <ItemTitle>Map</ItemTitle>
        </ItemContainer>
      </GridBox>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://arena.evolution.land/' data-aos="fade-down" data-aos-duration="1500" >
          <ApostleIcon />
          <ItemTitle>Apostle Arena</ItemTitle>
        </ItemContainer>
      </GridBox>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://portal.evolution.land/land/5/market/land' data-aos="fade-left" data-aos-duration="1500" >
          <MarketIcon />
          <ItemTitle>MarketPlace</ItemTitle>
        </ItemContainer>
      </GridBox>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://portal.evolution.land/land/5/furnace/drill/upgrade' data-aos="fade-right" data-aos-duration="1500" >
          <FurnaceIcon />
          <ItemTitle>Furnace</ItemTitle>
        </ItemContainer>
      </GridBox>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://portal.evolution.land/land/5/gov' data-aos="fade-up" data-aos-duration="1500" >
          <DaoIcon />
          <ItemTitle>DAO</ItemTitle>
        </ItemContainer>
      </GridBox>
      <GridBox>
        <ItemContainer target='_blank' rel='noopener noreferrer' href='https://portal.evolution.land/land/5/farm' data-aos="fade-left" data-aos-duration="1500" >
          <FarmIcon />
          <ItemTitle>Farm</ItemTitle>
        </ItemContainer>
      </GridBox>
    </Container>
  </PageLayoutContainer2>;
};

export default GamePlays;
