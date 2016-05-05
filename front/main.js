// need to use all React object
import React from 'react';
import { renderToString } from 'react-dom/server';

import Hello from './components/hello';

export default function (data) {
  return renderToString(React.createFactory(Hello)(data));
}
