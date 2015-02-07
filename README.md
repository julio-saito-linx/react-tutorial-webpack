# React Tutorial + WebPack + Express.js

Since we have to learn React, let's learn the right way. Using [webpack](https://github.com/webpack/webpack) seems to be a pretty smart way.

- [React Tutorial](http://facebook.github.io/react/docs/tutorial.html)
- [Yeoman react-webpack](https://www.npmjs.com/package/generator-react-webpack)
- [Express.js + CORS](http://enable-cors.org/server_expressjs.html)


## Before starting

```sh
# install grunt, gulp, bower and yeoman - globally
[sudo] npm install -g yo bower grunt-cli gulp
```


## Starting the tutorial

```sh
# clone this repo (only clean branch)
git clone -b clean --single-branch git@github.com:saitodisse/react-tutorial-webpack.git react-tutorial-webpack-clean
cd react-tutorial-webpack-clean

# install dependencies
npm install

# tab 1 - start express.js server -> localhost:3000
node server.js

# tab 2 - start react app         -> localhost:8000
grunt serve
```

open this link and follow the [React Tutorial](http://facebook.github.io/react/docs/tutorial.html):

- [http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/)


## Creating React Components
```sh
yo react-webpack:component CommentBox
yo react-webpack:component CommentList
yo react-webpack:component Comment
yo react-webpack:component CommentForm
```
