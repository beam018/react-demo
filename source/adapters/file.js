import { resolve } from 'path';

const config = require('config').default;
const adConfig = config.adaptor;

const results = require(resolve(process.cwd(), adConfig.src));

const fileAdaptor = {
  get: () => Promise.resolve({
    results,
    count: results.length
  })
};

export default fileAdaptor;
