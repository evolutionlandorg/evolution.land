// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { BareProps } from 'components/types';
import { PageH1, PageLayoutContainer, PageLayoutContainer2 } from 'styled/page';
import { Flex, Grid } from 'components';
import useMatchBreakpoints from 'hooks';
import p01 from './images/p01.png'
import p02 from './images/p02.png'
import p03 from './images/p03.png'
import p04 from './images/p04.png'
import p05 from './images/p05.png'
import p06 from './images/p06.png'
import p07 from './images/p07.png'
import p09 from './images/p09.png'
import p10 from './images/p10.png'
import p12 from './images/p12.png'
import p14 from './images/p14.png'
import p16 from './images/p16.png'
import p20 from './images/p20.png'
import p21 from './images/p21.png'
import p22 from './images/p22.svg'
import p23 from './images/p23.png'
import p24 from './images/p24.png'
import p25 from './images/p25.png'
import p26 from './images/p26.png'
import p27 from './images/p27.png'
import p28 from './images/p28.png'
import p29 from './images/p29.png'
import p30 from './images/p30.png'
import p31 from './images/p31.png'


export interface PartnerProps extends BareProps {
  location: Location,
  locationList: PartnerLocations
  layoutX: number
  layoutY: number
}

interface Location {
  base: string,
  size: number,
  left: number,
  top: number
  image: string,
  link?: string,
}

interface PartnerLocations {
  [x: string]: Location
}

const Container = styled.div`
  position: relative;
  flex: 1;
`

const Title = styled(PageH1)`
  text-align: center;
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: right;
    margin-bottom: 1rem;
  }
`

const PartnerContainer = styled.a<{ size: number, left: number, top: number }>`
  display: block;
  width: ${({ size }) => size}px;
  height:  ${({ size }) => size}px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`

const Partner: React.FC<PartnerProps> = ({ className, locationList, location, layoutX, layoutY, ...rest }) => {
  const { base, size, top, left, image, link } = location;
  const k = 1427 - layoutX < 633 - layoutY ? layoutY / 633 : layoutX / 1427;

  const offsetX = layoutX - 1427 > 0 ? (layoutX - 1427) / 2 : 0
  const x = useMemo(() => {
    if (base === '0') return left * k + offsetX;
    return (locationList[base].left + left + locationList[base].size) * k;
  }, [base, k])

  const y = useMemo(() => {
    if (base === '0') return top * k;
    return (locationList[base].top + top + locationList[base].size) * k;
  }, [base, k])
  if (k === 0) {
    return null
  }
  return <PartnerContainer href={link} target='_blank' rel='noopener noreferrer' className={className} size={size * k} top={y} left={x} {...rest}>
    <img src={image} alt="..." />
  </PartnerContainer>
}

const data: PartnerLocations = {
  "1": {
    base: "0",
    size: 116,
    left: 256,
    top: 50,
    image: p29,
    link: "https://clv.org/?type=wallet"
  },
  "2": {
    base: "0",
    size: 140,
    left: 418,
    top: 72,
    image: p28,
    link: "https://unstoppabledomains.com/"
  },
  "3": {
    base: "0",
    size: 140,
    left: 589,
    top: 95,
    image: p05,
    link: "https://play.decentraland.org/?position=0%2C0"
  },
  "4": {
    base: "0",
    size: 112,
    left: 743,
    top: 41,
    image: p25,
    link: "https://www.did.id/"
  },
  "5": {
    base: "0",
    size: 125,
    left: 881,
    top: 86,
    image: p07,
  },
  "6": {
    base: "0",
    size: 133,
    left: 1027,
    top: 54,
    image: p12,
    link: "https://astar.network/"
  },
  "7": {
    base: "0",
    size: 129,
    left: 168,
    top: 189,
    image: p22,
    link: "https://www.hyperpay.tech/"
  },
  "8": {
    base: "0",
    size: 107,
    left: 329,
    top: 192,
    image: p06,
    link: "https://mdex.com/#/"
  },
  "9": {
    base: "0",
    size: 120,
    left: 485,
    top: 209,
    image: p03,
    link: "https://www.lendhub.org/"
  },
  "10": {
    base: "0",
    size: 123,
    left: 629,
    top: 256,
    image: p24,
    link: "https://subsocial.network/"
  },
  "11": {
    base: "0",
    size: 135,
    left: 757,
    top: 172,
    image: p02,
    link: "https://crust.network/"
  },
  "12": {
    base: "0",
    size: 88,
    left: 900,
    top: 241,
    image: p31,
    link: "https://www.cryptoblades.io/"
  },
  "13": {
    base: "0",
    size: 125,
    left: 1005,
    top: 210,
    image: p21,
    link: "http://token.im/"
  },
  "14": {
    base: "0",
    size: 153,
    left: 1151,
    top: 159,
    image: p09,
    link: "https://yieldguild.io/"
  },
  "15": {
    base: "0",
    size: 145,
    left: 69,
    top: 337,
    image: p01,
    link: "https://channels.finance/"
  },
  "16": {
    base: "0",
    size: 127,
    left: 237,
    top: 328,
    image: p10,
    link: "http://maonft.com/"
  },
  "17": {
    base: "0",
    size: 106,
    left: 379,
    top: 311,
    image: p04,
    link: "https://phala.network/"
  },
  "18": {
    base: "0",
    size: 133,
    left: 500,
    top: 347,
    image: p14,
    link: "https://polygon.technology/"
  },
  "19": {
    base: "0",
    size: 120,
    left: 662,
    top: 409,
    image: p26,
    link: "https://polygonstudios.com/"
  },
  "20": {
    base: "0",
    size: 107,
    left: 767,
    top: 323,
    image: p27,
    link: "https://www.polkapet.world/"
  },
  "21": {
    base: "0",
    size: 133,
    left: 893,
    top: 343,
    image: p30,
    link: "https://cbridge.celer.network/"
  },
  "22": {
    base: "0",
    size: 109,
    left: 1097,
    top: 330,
    image: p16,
    link: "https://quickswap.exchange/#/swap"
  },
  "23": {
    base: "0",
    size: 138,
    left: 371,
    top: 454,
    image: p20,
    link: "http://mytrade.org/"
  }
}

const GamePlays: React.FC<BareProps> = ({ className }) => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints()

  const [layoutX, setLayoutX] = useState<number>(0);
  const [layoutY, setLayoutY] = useState<number>(0);

  const box = useRef(null)

  useEffect(() => {

    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    if (box.current) {
      // @ts-ignore
      let height = box.current.offsetHeight;
      // @ts-ignore
      let width = box.current.offsetWidth;

      setLayoutX(width);
      setLayoutY(height);
    }

  }, [box]);

  return <PageLayoutContainer2 className={className} height="100%" flex="1" flexDirection="column" justifyContent="center" alignItems="space-between">
    <Title>SETTLED PARTNERS</Title>
    <Container ref={box}>
      {Object.keys(data).map((id: string, index) => {
        const partner = data[id];
        return <Partner data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={(index * 100).toString()} key={id} location={partner} locationList={data} layoutX={layoutX} layoutY={layoutY} />
      })}
    </Container>
  </PageLayoutContainer2>;
};

export default GamePlays;
