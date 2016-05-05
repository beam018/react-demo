/* eslint-disable */
import React from 'react';

import Hello from './components/hello';
/* eslint-enable */

import { renderToString } from 'react-dom/server';

export default renderToString.bind(null, <Hello name='React' />);
