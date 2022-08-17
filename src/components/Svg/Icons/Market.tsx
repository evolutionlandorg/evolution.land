// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 400 400' {...props}>
    <path d="M50 232.366V385.536H150V283.438H250V385.536H350V232.366L200 117.5L50 232.366Z" fill="#1E32E5" />
    <path d="M200 15L0 173.527V238.125L200 79.6429L400 238.125V173.527L200 15Z" fill="#1E32E5" />
  </Svg>
);

export default Icon;
