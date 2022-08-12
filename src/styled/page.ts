import { Box, Flex } from "components";
import styled from "styled-components";

export const PageLayoutContainer = styled(Flex)`
  padding-left: 0px;
  flex: 1;
  height: 100%;
  flex-direction: column;
  
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    padding-left: 60px;
  }
`;

export const PageLayoutContainer2  = styled(Flex)`
  padding-left: 0px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 60px;
  }
`

export const PageLayoutLeft = styled(Flex)`
  flex: 1;
`;

export const PageLayoutRight = styled(Flex)`
  flex: 1;
`;

export const PageH1 = styled(Box)`
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  font-weight: 700;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 46px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 64px;
  }
`;

export const PageText = styled(Box)`
  font-size: 16px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 24px;
  }
`;
