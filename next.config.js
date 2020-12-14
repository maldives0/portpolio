
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enable: process.env.ANALYZE === 'true',
});



module.exports = ({

    distDir: '.next',
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        const newConfig = {
            ...config,
            mode: prod ? 'production' : 'development',
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
            ],
        }
        if (prod) {
            newConfig.devtool = 'hidden-source-map';
        }
        return newConfig;
    },
});
