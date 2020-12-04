const routesMapper = (router, config, path) => {

  for (let key in config) {
    let method = key.split(' ')[0];
    let url = key.split(' ')[1];
    let callback = require(path + '/' + config[key].split('.')[0])()[config[key].split('.')[1]];
    router[method.toLowerCase()](url, callback);
  }
};

module.exports = routesMapper;