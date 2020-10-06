const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                blue: {
                    ...colors.blue,
                    "100": "#9cdbdd",
                }
            }
        },
    },
    variants: {},
    plugins: [],
}