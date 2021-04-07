module.exports = {
  publicPath: "./",
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_var.scss";
        `,
      },
    },
  },
};
