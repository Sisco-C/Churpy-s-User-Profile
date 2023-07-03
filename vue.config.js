module.exports = {
  css: {
    loaderOptions: {
      // Pass options to sass-loader
      sass: {
        // Add the stylesheet link here
        additionalData: `@import "@/src/styles.css";`,
      },
    },
  },
};
