# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Authentication

## Registration

1. Registered user data are saved in Browser Local Storage.
2. Registration form field cannot be empty.
3. User will get Success response after completion of registration process.


## Login
1. Check Browser Local Storage data which are stored in registration process.
2. Login form email field cannot be empty.
3. Only when login email and password are present in Local Storage data system will be logged in and redirected to dashboard. If not, it will throw an invalid credential error. 

# Database

## Soundcharts.json
We updated this json file by hardcoding the 'Gender' property.Entire project is using this updated database. 

NOTE: Kindly refrain from modifying any data in the database as it might result in unexpected behaviour.    

# Dashboard

## Home page
1. Import the dataset in json format.
2. List the dataset in the UI using [JS Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.
3. Search by name, genre and country are implemented using [Fuzzy Search](https://github.com/wouterrutgers/fuzzy-search) npm package. 
4. Filter the dataset by Country and Gender using [JS Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.
5. On clicking individual card, redirect to detail page with "artist" name as query parameter which will be used for filtering individual data.


## Details page
1. Filter the dataset using the "artist" name.
2. List the filtered dataset in the UI using [JS Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
