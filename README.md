## Menugenerator

 This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
 
 This project is to generate the menu for Intouch POS.


## Requirements
- NPM
- Node version > 12
- Angular CLI 

## Install

1. Clone project :
```bash
git clone https://github.com/AssalCorp/NewPOSMenuGeneratorWizard
cd menugenerator
```

2. Install dependencies:
```
npm i
```

3. Development server

```bash
npm start
```
Navigate to [http://localhost:4200/](http://localhost:4200/).

The app will automatically reload if you change any of the source files.

## Code scaffolding

It's awesome. Try it and you'll love it!

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

[More commands.](https://github.com/angular/angular-cli/wiki)

## Build

```bash
npm run build
# and result will be at dist

## Serve production build locally

Install http-server globbaly
```bash
npm i -g http-server
```
Build the app and serve it
```bash
npm run build
rsync -av ./dist/index.html ./dist/404.html # to be able to open app not only in root
http-server ./dist
```
You will see the link of the app in the console.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Code coverage can be found in [coverage](./coverage/index.html) folder

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

