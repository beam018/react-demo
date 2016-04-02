const config = require('config').default;
const adaptor = require(`./adapters/${config.adaptor.type}`).default;

import logger from '../logger';

const source = {
  get: () => {
    return adaptor.get()
      .catch(logger.info);
  }
};

export default source;
