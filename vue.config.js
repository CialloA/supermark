// module.exports = {
//   configureWebpack: {
//     reslove: {
//       alias: {
//         assets: 'src/assets',
//         common: 'src/common',
//         component: 'src/component',
//         network: 'src/network',
//         views: 'src/views',

//       }
//     }
//   }
// }

const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("scss", resolve("src/assets/scss"))
      .set("components", resolve("src/components"))
      .set("common", resolve("src/common"))
      .set("plugins", resolve("src/plugins"))
      .set("views", resolve("src/views"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("layouts", resolve("src/layouts"))
      .set("static", resolve("src/static"))
      .set("network", resolve("src/network"));
  }
};