# Local-weather-app

## Introduction

Local Weather App Task from [FreeCodeCamp](https://www.freecodecamp.com/challenges/show-the-local-weather)
The app get's your location using [IP-API](http://ip-api.com/) and then using [Open-Weather API](http://api.openweathermap.org/data/2.5/weather) to generate Weather Forecast for today

## Software stack:

#### To run this project we are using next technologies:

* HTML 5
* CSS 3
* [JQuery ^1.12.0](https://jquery.com/)
* [Webpack ^2.2.1](https://webpack.js.org/)

## Project structure:

````
 .
├── README.md                     * Readme of the project
├── config                        * WebPack and Karma configuration files
│   ├── helpers.js                * Webpack Helpers functions file
│   ├── karma-test-shim.js        * Karma tests entry point
│   ├── karma.conf.js             * Karma configuration file
│   ├── webpack.common.js         * Webpack common config
│   └── webpack.test.js           * Webpack test config  
├── docs                          * Folder with all compiled files to be served on github pages
│   ├── dist                      * Folder with compiled assets, js and css files
│   │   ├── app.js                * Minified js build of the app
│   │   └── style.css             * Extracted style.css
│   └── index.html                * Compiled index.html file  
├── index.html                    * Source precompiled index.html  
├── karma.conf.js                 * Base Karma config
├── package.json                  * NPM dependencies package
├── src                           * Development source folder
│   ├── app                       * App assets folder
│   │   ├── app.js                * App scripts  
│   │   ├── app.spec.js           * Spec file for app.js file ( not used in this build )
│   │   ├── assets                * assets folder
│   │   │   └── css               * css assets folder
│   │   │       └── style.css     * basic styling files
│   │   └── constants.js          * js constants for the app
│   ├── index.html                * html entry point
|   ├── index.js                  * js app entry point ( not used in this build )
└── webpack.config.js             * webpack config file  

````
    
## Quick start:

#### Make sure you have Node version >= 5.0 and NPM >= 3
    
```bash
# clone our repo
git clone git@github.com:MikeSaprykin/Local-weather-app.git

# change directory to our repo
cd Local-weather-app

# install the repo with npm or with yarn
npm install

# builds app with webpack and starts watching files
  npm start
  
# starts webpack-dev-server ( doesn't work in this build )
# npm run server

# builds app with webpack into docs folder
  npm run build

# navigate to docs folder
cd docs

# open index.html in your browser

# to run unit tests with karma/jasmine ( doesn't work in this build )
# npm test
```

Where to start:
------
 * You can watch compiled and working app [here](http://mikesaprykin.github.io/Local-weather-app/)
 * Watch my FreeCodeCamp [profile](https://www.freecodecamp.com/mikesaprykin)
 
TODOs:
-----
* [ ] Build bootstrap and jquery with webpack
* [ ] Update Webpack-test.config
* [ ] Fix webpack-dev server support
* [ ] Update karma-shim.js
* [ ] Update karma.config.js
* [ ] Cover with unit tests
