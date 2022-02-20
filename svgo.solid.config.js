/**
 * The `svgo` configuration to use for solid icons.
 */
module.exports = {
    plugins: [
        // Sorts element attributes for readability.
        "sortAttrs",
        // Removes `width` and `height` attributes and adds `viewBox` if 
        // missing.
        "removeDimensions",
        // Removes the `fill` attribute.
        {
            name: "removeAttrs",
            params: {
                attrs: "fill",
            },
        },
        // Adds the `fill="currentColor"` and `aria-hidden="true"` attributes.
        {
            name: "addAttributesToSVGElement",
            params: {
                attributes: [
                    {
                        fill: "currentColor"
                    },
                    {
                        "aria-hidden": true
                    },
                ],
            },
        },
    ],
};