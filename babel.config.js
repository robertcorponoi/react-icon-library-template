// This config file is used by Jest.
// https://jestjs.io/docs/tutorial-react#setup-without-create-react-app
module.exports = {
    presets: [
        // A smart preset that allows us to use the latest JavaScript without 
        // needing to micromanage which syntax transforms are needed by our
        // target environment.
        // https://babeljs.io/docs/en/babel-preset-env
        "@babel/preset-env",
        // A preset for use with testing React components.
        // https://babeljs.io/docs/en/babel-preset-react
        "@babel/preset-react"
    ],
};