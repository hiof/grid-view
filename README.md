# Hiof grid view package

## About

A package with the required files for the it-services views.

## Copyright

This project is distributed under a GNU General Public License v3 - Take a look at the COPYING file for details.

## Install

Install [Git](http://git-scm.com) if it's not already installed on your computer. Then run (this will download this project to the folder the shell has open):

```
$ git clone https://github.com/hiof/grid-view.git
```

Install [io.js](https://iojs.org) (or [Node.js](http://nodejs.org)) if it's not already installed on your computer. Then run (this will install the project dependencies):

```
$ sudo npm install -g grunt-cli
$ npm install
$ bower install
```

## Build

`$ grunt build`: Compiles and builds the grid-view package

## Deploy

1. Rename secret-template.json to secret.json and add your credentials.
2. Deploy and test your code on the staging server `$ grunt deploy-staging2`
3. Deploy to production `$ grunt deploy-prod2`

## Releases

v1.0.0 - Initial grid view

[Github releases](https://github.com/hiof/grid-view/releases)

### Roadmap


