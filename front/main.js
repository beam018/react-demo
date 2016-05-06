// need to use all React object
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './components/app';

export default function (data) {
  return renderToString(React.createFactory(App)(data));
}
