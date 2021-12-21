const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

const domainMarketing = process.env.PRODUCTION_DOMAIN_MARKETING

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domainMarketing}/marketing/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
