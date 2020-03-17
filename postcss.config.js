// const postcssNested = require(`postcss-nested`)

// module.exports = () => ({
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     require("postcss-simple-vars"),
//     require("postcss-nested"),
//     require("postcss-import"),
//   ],
// })

const reactAppRewirePostcss = require("react-app-rewire-postcss")
const postcssCustomMedia = require("postcss-custom-media")

module.exports = config =>
  reactAppRewirePostcss(config, {
    plugins: () => [postcssCustomMedia(/* pluginOptions */)],
  })
