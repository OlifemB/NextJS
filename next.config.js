const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withSass(
    withCSS({
        cssModules: true,
        cssLoaderOptions: {
            url: false,
        }
    })
);

module.exports = {
    future: {
        webpack5: true
    }
}