// gatsby-config.js

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
