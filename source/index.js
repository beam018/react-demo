const config = require('config').default;
const adaptor = require(`./adapters/${config.adaptor.type}`).default;

import logger from '../logger';
import getDefaults from './defaults';
import { merge, isEmpty } from 'lodash';

const source = {
  get: (req) => {
    const reqData = req.query;

    return adaptor.get(req)
      .then(data => {
        data.q = reqData.q;

        data = merge(getDefaults(), data);

        return data;
      })
      .catch(logger.info);
  }
};

export default source;