// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 16 12' {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 3.27924L8.41665 6.75494C8.15212 6.87619 7.84788 6.87619 7.58335 6.75494L0 3.27924V1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V3.27924ZM16 4.33333V11C16 11.5523 15.5523 12 15 12H1C0.447715 12 0 11.5523 0 11V4.33333L7.58335 7.80903C7.84788 7.93028 8.15212 7.93028 8.41665 7.80903L16 4.33333Z" fill="white" />
  </Svg>
);

export default Icon;
