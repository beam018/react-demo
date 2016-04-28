global.requireRoot = name => {
  return require(process.cwd() + '/' + name);
};

global.requireDefault = name => {
  let module;

  try {
    module = requireRoot(name);
  } catch (e) {
    module = require(name);
  }

  return module.default || module;
};
