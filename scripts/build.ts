import { promisify } from "util";
import { promises as fs } from "fs";

import rimraf from "rimraf";
import camelcase from "camelcase";
import { transform as svgrTransform } from "@svgr/core";

// Promisifies the `rimraf` module.
const rimrafPromisified = promisify(rimraf);

/**
 * Takes the name and code for the icon and transform it into a React 
 * component.
 * 
 * @async
 * 
 * @param {string} svg The SVG code of the icon.
 * @param {string} componentName The name of the SVG to use as the component's name.
 * 
 * @returns {Promise<string>}
 */
const transform = async (svg: string, componentName: string): Promise<string> => {
    return await svgrTransform(svg, { typescript: true }, { componentName });
};

/**
 * Gets the icons for the specified style.
 * 
 * @async
 * 
 * @param {"solid"|"outline"} style The style of icons to get.
 * 
 * @returns {Promise<{ svg: string, componentName: string }[]>}
 */
const getIcons = async (style: "solid" | "outline"): Promise<{ svg: string, componentName: string }[]> => {
    // The files from the directory that corresponds to the specified style.
    const files = await fs.readdir(`./optimized/${style}`);

    // Reads each file to get the code and name of the SVG.
    return Promise.all(
        files.map(async (file) => ({
            svg: await fs.readFile(`./optimized/${style}/${file}`, "utf8"),
            componentName: `${camelcase(file.replace(/\.svg$/, ""), {
                pascalCase: true,
            })}Icon`,
        })),
    );
};

/**
 * Creates the index file to export all of the icon components.
 * 
 * @param {<{ componentName: string, svg: string }>[]} icons The icons to export.
 * 
 * @returns {string} Returns the string to use for the index file.
 */
const exportAll = (icons: { svg: string, componentName: string }[]): string => {
    return icons
        .map(({ componentName }) => {
            return `export { default as ${componentName} } from "./${componentName}";`
        })
        .join("\n")
};

/**
 * Creates the directories for the icons, converts them from SVG to React 
 * components, and write them to their directories.
 * 
 * @async
 * 
 * @param {"solid"|"outline"} style The style of icon to build.
 */
const buildIcons = async (style: "solid" | "outline") => {
    // The output directory is the style of the icon at the room of the 
    // project.
    const outDir = `./${style}`;

    // Create the directories for the icons if they don't exist already.
    await fs.mkdir(outDir, { recursive: true });

    // Get all of the icons for the specified style.
    const icons = await getIcons(style);

    await Promise.all(
        icons.flatMap(async ({ componentName, svg }) => {
            // Get the code for the icon component.
            const content = await transform(svg, componentName);

            // Write the icon component to the directory.
            return [
                fs.writeFile(`${outDir}/${componentName}.tsx`, content, "utf8"),
            ];
        }),
    );

    // Write the `index` file that exports all of the icons for that style.
    await fs.writeFile(`${outDir}/index.tsx`, exportAll(icons), "utf8");
};

/**
 * Builds the icons and writes them to their directories.
 */
const main = () => {
    console.log("Building icons...")

    /**
     * Remove the previously built icons and run the build script to rebuild 
     * the icons.
     */
    Promise.all([rimrafPromisified("./outline/*"), rimrafPromisified("./solid/*")])
        .then(() =>
            Promise.all([
                buildIcons("solid"),
                buildIcons("outline"),
            ]),
        )
        .then(() => console.log("Finished building icons."))
};

main();
