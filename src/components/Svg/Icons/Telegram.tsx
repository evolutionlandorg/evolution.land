// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 16 14' {...props}>
    <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M4 9L6 14L10 10L14 2L4 8V9Z" fill="white" />
    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7 10L6 14L10 10L14 2L7 10Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M4 9L0 7L16 0L13 14L7 10L13 3L4 9Z" fill="white" />
  </Svg>
);

export default Icon;
