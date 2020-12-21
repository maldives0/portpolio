
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
        };
        if (prod) {
            newConfig.devtool = 'hidden-source-map';
            newConfig.resolve.alias = {
                "@ant-design/icons$": resolve(__dirname, "path/to/your/src/icons.tsx")
            };
        }
        return newConfig;
    },
});


