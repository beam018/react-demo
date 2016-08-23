import { join } from 'path';
import { readFile } from 'fs';

const logger = requireDefault('logger');
const config = requireDefault('config');
const adConfig = config.adaptor;

const fileAdaptor = {
  get: (req) => {
    const q = req.query.query || 'index';
    const filePath = join(adConfig.src, `${q}.json`);

    if (q === 'index') {
      return Promise.resolve({});
    }

    return new Promise(resolve => {
      readFile(filePath, (err, data) => {
        if (err) {
          logger.error(err);

          return resolve({});
        }

        data = JSON.parse(data);

        return resolve({
          results: {
            docs: data,
            count: data.length
          }
        });
      });
    });
  }
};

export default fileAdaptor;
