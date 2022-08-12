// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { cloneElement, ElementType, isValidElement, ReactNode } from 'react';
import styled from 'styled-components';
import { SpaceProps, variant, space } from 'styled-system';
import { BareProps } from '../types';

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  CONSTRAST: 'contrast',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
  LIGHT: 'light'
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface Props extends BareProps, SpaceProps  {
  variant?: Variant;
  endIcon?: ReactNode;
  onClick?: () => void;
}


export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: '#fff',
    color: '#2135DA'
  },
  [variants.SECONDARY]: {
    backgroundColor: 'transparent',
    color: '#fff'
  }
}

const Container = styled.button<Props>`
  ${variant({
  variants: styleVariants
})}
  padding: 6px 8px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.evolutionland-button--disabled):not(.evolutionland-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.evolutionland-button--disabled):not(.evolutionland-button--disabled) {
    box-shadow: none;
    opacity: 0.85;
    transform: translateY(1px);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 20px;
    padding: 6px 18px;
  }

  ${space}
`;

const Button: React.FC<Props> = ({ className, children, variant="primary", onClick, endIcon, ...rest }) => {
  return <Container variant={variant} className={className} {...rest} onClick={onClick}>
    {children}
    {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: '0.5rem'
          })}
  </Container>;
};

export default Button;
