const PLUGIN_NAME = "MyPlugin";

class MyPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      // compilation.hooks.
      compilation.hooks.processAssets.tapPromise(PLUGIN_NAME, async () => {
        const stats = compilation.getStats().toJson({
          chunkGroups: true,
          chunks: true,
        });
        const { namedChunkGroups, assetsByChunkName } = stats;
        console.log("assetsByChunkName", assetsByChunkName);
      });
    });
  }
}

module.exports = {
  MyPlugin,
};
