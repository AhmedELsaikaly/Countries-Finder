# Countries Finder

Web App for getting world countries and it have the ability to add or edit country,
also it have the ability to display country on google maps.

The app is for client side only and built with React js with ant design as ui library and google maps for displaying position of country

## Creator

Ahmed ELsaikaly

## Table of Contents

1. [Usage](#Usage)
1. [Folder structure](#folder-structure)
1. [Used Dependencies](#Dependencies)

## Usage

[deployed Link](https://countries-test.netlify.app/)

> Some usage instructions:

App Configuration

```env
    REACT_APP_GOOGLE_MAPS_API = // this environment variable for google maps api key
```

> To start the project you need to:
> in the root directory terminal:

```sh
    npm install
    npm start
```

To make a build for the project,

```sh
    npm run build
```

## folder-structure

```
countries-finder
├── README.md
│── package.json
│── craco.config.js
├── public
│  ├── index.html
│  ├── favicon.ico
│  ├── manifest.json
│  └──  robots.txt
├── src
│  ├── App.js
│  ├── App.less
│  ├── App.scss
│  ├── index.js
│  ├── reportWebVitals.js
│  ├── setupTests.js
│  ├── App.test.js
│  ├── api
│  │    ├── countriesApis
│  │    │   └── getCountries.js
│  │    └── utils
│  │        └── httpUtil.js
│  ├── components
│  │    ├── Container
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── CountriesTable
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── CountryFlag
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── CountryForm
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── CustomButton
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── Footer
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── Header
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── LoadingSuspense
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    ├── LocationMap
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    └── Modal
│  │       ├── index.js
│  │       └── styles.module.scss
│  │
│  ├── constants
│  │    ├── apiEndPoints.js
│  │    ├── routes.js
│  │    └── validationRules.js
│  │
│  │
│  ├── pages
│  │    ├── Home
│  │    │   ├── index.js
│  │    │   └── styles.module.scss
│  │    └── NotFound
│  │       ├── index.js
│  │       └── styles.module.scss
│  │
│  ├── redux
│  │    ├── actions
│  │    │   └── countriesActions.js
│  │    ├── selectors
│  │    │   └── countries.js
│  │    ├── selectors
│  │    │   └── countries.js
│  │    ├── slices
│  │    │  └── countriesSlice.js
│  │    └── store.js
│  │
│  │
└──└──  styles
        ├── _mixins.scss
        └── _variables.scss
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [@craco/craco](https://www.npmjs.com/package/@craco/craco)
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [antd](https://www.npmjs.com/package/antd)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
