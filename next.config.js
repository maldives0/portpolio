
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});



module.exports = withBundleAnalyzer({
    distDir: '.next',

    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        const newConfig = {
            ...config,
            mode: prod ? 'production' : 'development',
        }
        if (prod) {
            newConfig.devtool = 'hidden-source-map';
        }
        return newConfig;
    },
});


