/**
 * The `svgo` configuration to use for outline icons.
 */
module.exports = {
    plugins: [
        // Sorts element attributes for readability.
        "sortAttrs",
        // Removes `width` and `height` attributes and adds `viewBox` if 
        // missing.
        "removeDimensions",
        // Removes the `stroke` attribute.
        {
            name: "removeAttrs",
            params: {
                attrs: "stroke",
            },
        },
        // Adds the `stroke="currentColor"` and `aria-hidden="true"` attributes.
        {
            name: "addAttributesToSVGElement",
            params: {
                attributes: [
                    {
                        stroke: "currentColor"
                    },
                    {
                        "aria-hidden": true
                    },
                ],
            },
        },
    ],
};