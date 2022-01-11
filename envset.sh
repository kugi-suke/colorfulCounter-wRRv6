conda install -c conda-forge nodejs -y
conda install -c conda-forge yarn -y
yarn init -y
mkdir public src
touch public/index.html
touch src/index.js src/index.css
touch src/App.js src/App.test.js src/App.css
touch .babelrc webpack.config.babel.js
touch jest.config.js
mkdir __mocks__
touch __mocks__/styleMock.js
touch __mocks__/fileMock.js
yarn add --dev flow-bin flow-typed
yarn flow init
# tree -aI node_modules
yarn add react react-dom
yarn add --dev jest jest-enzyme enzyme enzyme-adapter-react-16
yarn add --dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-flow @babel/register babel-jest
yarn add --dev webpack webpack-cli webpack-dev-server
yarn add --dev html-webpack-plugin mini-css-extract-plugin uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin
yarn add --dev babel-loader css-loader html-loader

# https://casualdevelopers.com/tech-tips/how-to-setup-react-project-without-create-react-app/
# https://qiita.com/chocomint_t/items/4bc57945bce081922582