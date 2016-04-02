import { resolve } from 'path';

const config = require('config').default;
const adConfig = config.adaptor;

const fileAdaptor = {
  get: () => Promise.resolve({
    data: require(resolve(process.cwd(), adConfig.src))
  })
};

export default fileAdaptor;
