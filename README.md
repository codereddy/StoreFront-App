# Storefront Application

## Description
This is a simple storefront application using React, TypeScript, Styled Components, Material UI, and Highcharts. It fetches data from the Fake Store API and allows users to select categories and products, view product details, and switch between chart view and product details view.

## Setup

1. Setting Up a Localhost:
   
   git clone <repo-url>
   cd store-app
   npm install
   npm start
This will run the app in the development mode. Open http://localhost:3000 to view it in the browser.

   ## Production build
   npm run build

   ## Deployment to Netlify
   npm install -g netlify-cli
   netlify login
   netlify deploy

   ## Technologies Used
   React: Frontend library for building user interface
   TypeScript: Typed superset of JavaScript used for typecheking the application
   useContext: React hook for state management
   useFetch: A Custom Hook for data fetching from fake store API
   Styled Components: Styling solution for React used across all components
   Material UI: UI component library for styling and layout handling
   Highcharts: Charting library for producing BAR charts using data from fake store API
   Fake Store API: API for fetching product data and categories data


# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## References & Documentation

Create React App documentation - (https://facebook.github.io/create-react-app/docs/getting-started).

React - [React documentation](https://reactjs.org/).


 ## Additional Explanations
 Explanations:

1. Included a single test case to test successful render of the application.
2. Included suitable logo and title for Tab.	
3. Implemented a custom hook, alternatively can also use it from 'use-http'.
4. Took the liberty of positioning the View Switch dropdown to switch between Price and Rating 
5. Took the interval on Y-axis as 250 by reference to sample screenshots.

Improvements Possible: 

1. Making the chart Area re-sizable
2. Creating different chart types with same data
3. Enabling Zoom to help in-depth analysis
4. Downloadble charts
6. Using use-http to replace custom hook
