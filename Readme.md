# Front End Javascript 

The Stock Ticker Application displays the Stock Data of symbol(input) entered by the user using Alpha Vantage API. 
To run this app follow the instuctions in the Readme.md file.

__Project Setup__  
Create folder structure
-  root
-   --src
-      --css
-         --styles.css
-      --js
-         --index.js
-  --index.html
-  --Readme.md 

__Review Creating package.json__ 
Open the terminal
- --Go to the root folder
- run the command to initiate the project
- npm init
- Fill all the information required, this will create a package.json file on the root folder

__Installing node modules__  
Installing Project Dependancies: 
  -  Install parcel bundler, run the below command
  -  npm install -D parcel-bundler
  -  This will create package-lock.json file and node_modules folder on the root

Add the following code to your package.json file within "scripts"
  -  "build": "parcel build src/index.html",
  -  "start": "parcel src/index.html"

__Create A Project In Git__  
- Add new repository to git. Add its link to package.json file
- Clone the project from localhost with github repository

__API Volcabulary__
- Create API key from Alpha Vantage API
- For this app the API  key used is: 2UVQEY3ZXDGBHTJO 
- And the Url is https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=2UVQEY3ZXDGBHTJO

__Postman__  
Add API link to the postman and test the api

__Working Of App__
- Create a form in index.html file
- Add eventlistener on page load
- Add event listener on form submit and fetch the data 
- Display the data as a template

__Deployment To Netlify__  
Deploy project to Netlify. 
- For this app, 
- Netlify Link: https://stock-ticker-app-jaswinder-kaur.netlify.app/