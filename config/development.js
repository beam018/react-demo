import { resolve } from 'path';

export default {
  adaptor: {
    type: 'file',
    src: resolve(process.cwd() + '/data')
  }
};
