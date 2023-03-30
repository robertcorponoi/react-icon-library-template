# React Icon Library Template

A template for creating an icon library for your application. This template is heavily based on [heroicons](https://github.com/tailwindlabs/heroicons) and you should check it out to see if those icons can help you out.

**Table of Contents**

- [How It Works](#how-it-works)
- [Adding Icons](#adding-icons)
- [Tests](#tests)
- [GitHub Actions](#github-actions)
- [Keeping Up To Date With Template Changes](#keeping-up-to-date-with-template-changes)
- [License](#license)

## How It Works

When the build script is run, every SVG icon in the `src` directory will:

1. Solid icons will have their `fill` attribute set to `currentColor` while outline icons will have their `stroke` attribute set to `currentColor`.

2. The icon will be optimized and copied to the `./optimized` directory.

3. The icon will be transformed into a React component with it's name being a PascalCase version of the SVG file name and the word Icon added at the end. For example, an icon named `foo-bar` will be turned into a component named `FooBarIcon`.

4. Each icon will be exported from the `./solid/index.tsx` or `./outline/index.tsx` files. This means that the icons can be imported individually or in groups from their solid or outline directories.

## Adding Icons

To add an icon to the icon library:

1. Get the SVG code for your icon and figure out which directory the icon belongs in. If the icon has a fill, it should go in the `./src/solid` directory. Otherwise, if it has only a stroke or outline, it should go in the `./src/outline` directory.

2. Create a file for your icon in the directory that it belongs to. Make sure you name the file with the kebab case version of the name you want your React component to have. For example, an icon named `foo-bar` will be turned into a component named `FooBarIcon`. Make sure that you don't add the word "icon" to the name of your svg file as the build scripts adds it to the component name automatically.

3. Run the build command with `npm run build`. This will optimize the icons, add/remove certain attributes, and create the React components from the icons. It will also add the icons to the `index.tsx` file that corresponds to that style.

4. Use the icon in your application. This can differ depending on your setup but in general, you can import one or more icons like so:

```tsx
// Import a single icon.
import YourIcon from "your-icon-library/outline/YourIcon";

// Import multiple icons of the same style.
import { YourFirstIcon, YourSecondIcon } from "your-icon-library/solid";
```

## Tests

There are a couple basic tests to make sure solid and outline icons have the correct attributes. These work by using a test icon, which in the `src` directory is named `__jest-test.svg` and in the built files is named `JestTestIcon`.

These icons are imported into the `tests/icons.test.tsx` file and checked for the necessary attributes.

You can run the tests using `npm test` which will build the icon library and run the tests.

## GitHub Actions

The workflow at `.github/workflows/build.yml` will run whenever a pull request is made.

This action will install dependencies, run a build of the icon library, and run the available tests.

## Keeping Up To Date With Template Changes

This template will be updated when dependencies need updating, new packages are added, and new or better concepts are found. To keep up with changes you might want from the template:

1. Add the template repository as a remote:

```sh
git remote add template git@github.com:robertcorponoi/react-icon-library-template.git
```

2. Fetch the changes:

```sh
git fetch --all
```

3. Merge the changes from the main branch of the template repository:

```sh
git merge template/main
```

## License

[MIT](./LICENSE)
