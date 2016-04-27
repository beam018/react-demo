global.requireRoot = function(name) {
  return require(__dirname + '/' + name);
}

global.requireDefault = function(name) {
  let module;

  try {
    module = requireRoot(name);
  } catch (e) {
    module = require(name);
  }

  return module.default || module;
}
