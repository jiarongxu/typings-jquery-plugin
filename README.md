# Workplace_ online Guide

This project is the web UI for workplace_ application base on angular 1.x and ES6. Also it uses webpack and gulp for the build process.


## File Structure

We use a feature based approach with the project. code is group by features or pages. 

```
client
⋅⋅app/
⋅⋅⋅⋅index.js * entry point for the app
⋅⋅⋅⋅index.html * template for the app
⋅⋅⋅⋅Gulpfile.js * gulp configuration file
⋅⋅⋅⋅pageckage.json * npm packages list
⋅⋅⋅⋅webpack.config.js * webpack dev configuration file
⋅⋅⋅⋅webpack.test.config.js * webpack test configuration file
⋅⋅⋅⋅webpack.prod.config.js * webpack production configuration file
⋅⋅⋅⋅fonts/ * glyphicons fonts
⋅⋅⋅⋅images/ * images assets
⋅⋅⋅⋅⋅⋅appicon/ * icon images for home page apps
⋅⋅⋅⋅⋅⋅theme/ * images for default theme
⋅⋅⋅⋅scripts/ * where all javascripts live
⋅⋅⋅⋅⋅⋅core/ * core libs for angular and third party libs
⋅⋅⋅⋅⋅⋅common/ * shared directives for UI
⋅⋅⋅⋅⋅⋅mocks/ * all backend mocks live
⋅⋅⋅⋅⋅⋅home/ * homepage code
⋅⋅⋅⋅⋅⋅⋅⋅home.module.js * home page entry file
⋅⋅⋅⋅⋅⋅⋅⋅homeController * home controller
⋅⋅⋅⋅⋅⋅⋅⋅homeDirectives.js * home directive
⋅⋅⋅⋅⋅⋅⋅⋅views/ * view templates for page and directives
⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅mobile * view templates for mobile views
⋅⋅⋅⋅styles/ * all css here
⋅⋅⋅⋅⋅⋅main.scss * sass file entry point
⋅⋅⋅⋅⋅⋅small-desktop/ * basic styles and ipad size screen styles
⋅⋅⋅⋅⋅⋅medium-desktop/ * ipad landscape mode and small size laptop styles
⋅⋅⋅⋅⋅⋅large-desktop/ * large size laptop and normal desktop styles
⋅⋅⋅⋅⋅⋅mobile/ * mobile site styes
⋅⋅⋅⋅webfonts/ * web fonts for site hosted here
⋅⋅test/
⋅⋅⋅⋅_configurations * karma configuartion files
⋅⋅⋅⋅spec * unit test files here

```

## Build system
The project uses Gulp and Webpack for its build system.

**Webpack** handles file related work:
* Transpiling from ES6 to ES5 with **Babel**
* Loading HTML as modules
* Refreshing the browser and rebuilding on file changes
* Loading all modules
* Bundle the app
* Minify assets
* Uglify javascript

**Gulp** as task runner
* Start webpack dev server **gulp _serve**
* Start building process **gulp _build**
* Start unit test **gulp _unitTest**
* revision files
* sass compile and live reload

## Test Setup
We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our client files.
* Karma
* Webpack
* Jasmine



