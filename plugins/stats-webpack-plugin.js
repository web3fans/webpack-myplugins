module.exports = class StatsWebpackPlugin {
  apply(compiler) {
      compiler.hooks.done.tapAsync("StatsWebpackPlugin", (stats, callback) => {
          // console.log(stats);
          const assetsName = [];
          for(let assetName in stats.compilation.asserts){
            assetsName.push(assetName);
          }
          console.log('-----------')
          console.log(assetsName.join('\n'))
          callback()
      })
  }
}
