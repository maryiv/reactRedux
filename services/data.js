const debug = require('debug')('trader:data');
import accounts from './accounts.js'

let data = {};

data.getAccounts = () => {

  const func = (fulfill, reject) => {
    fulfill(accounts);
  };

  return new Promise(func);
};

export default data;