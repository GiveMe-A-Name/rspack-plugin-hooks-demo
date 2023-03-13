const utils = () => import(/* webpackChunkName: "utils" */ "./utils.js");

utils().then((module) => {
  module.sum(1, 2);
});
