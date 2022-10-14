module.exports = {
    plugins: [
        /* Add prefixes for the browsers we support (in browserList() */
        require("autoprefixer"),

        /* Minifier */
        require("cssnano")({
            preset: ["default", {
                discardComments: {
                    removeAll: true
                }
            }]
        })
    ]
};