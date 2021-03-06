const config = require('config').default;
const adaptor = require(`./adapters/${config.adaptor.type}`).default;

import logger from '../logger';
import getDefaults from './defaults';
import { merge } from 'lodash';

const source = {
  get: (req) => {
    const q = req.query.query;

    return adaptor.get(req)
      .then(data => {
        data.query = {
          text: q,
          submited: false
        }

        data.page = req.page;

        data = merge(getDefaults(), data);

        return data;
      })
      .catch(logger.info);
  }
};

export default source;
