module.exports = class ExportCompilerErrorPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync("StatsWebpackPlugin", (stats, callback) => {
      if (
        stats.compilation.errors &&
        stats.compilation.errors.length &&
        process.argv.indexOf("- -watch") == -1
      ) {
        console.log("build error");
        process.exit(1);
        callback();
      }
    })
  }
};
