# Hiof grid view package

## About

A package with the required files for the it-services views.

## Required knowledge

This package require knowledge of the following technologies, technics and modules:

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - [ES2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition)
    - [Babel](https://babeljs.io)
    - [jQuery](https://jquery.com)
    - [JSON](http://jsonapi.org)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - [Sass](http://sass-lang.com)
- [HTML](https://en.wikipedia.org/wiki/HTML)
    - [Handlebars](http://handlebarsjs.com)
- [Bootstrap](http://getbootstrap.com)
- [Node.js](https://nodejs.org)
    - [NPM](https://www.npmjs.com)
- [Grunt](http://gruntjs.com) and Grunt tasks (see `Gruntfile.js` for details)
- [Bower](http://bower.io)
- [SSH](https://en.wikipedia.org/wiki/Secure_Shell)
- [Git](https://git-scm.com)
    - [Github](https://github.com)

## Copyright

This project is distributed under a GNU General Public License v3 - Take a look at the COPYING file for details.

## Install

Install [Git](http://git-scm.com) if it's not already installed on your computer. Then run (this will download this project to the folder the shell has open):

```
$ git clone https://github.com/hiof/grid-view.git
```

Install [Node.js](http://nodejs.org) if it's not already installed on your computer. Then run (this will install the project dependencies):

```
$ sudo npm install -g grunt-cli
$ npm install
$ bower install
```

## Build

`$ grunt build`: Compiles and builds the grid-view package

## Deploy

1. Rename secret-template.json to secret.json and add your credentials.
2. Deploy and test your code
    1. The staging server for www `$ grunt deploy-staging`
    2. The staging server for www2 `$ grunt deploy-staging2`
3. Deploy to production
    1. Deploy to www `$ grunt deploy-prod`
    2. Deploy to www2 `$ grunt deploy-prod2`

## Releases

v1.1.0 - Initial server agnostic version
v1.0.0 - Initial grid view

[Github releases](https://github.com/hiof/grid-view/releases)

### Roadmap
