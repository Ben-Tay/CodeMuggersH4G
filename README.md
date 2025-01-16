# CodeMuggersH4G & Credits
This is the repository for the Hack4Good project by team `Code Muggers`.  
Done by `Benedict Tay Haoze, Koh Swee Hong`.

## Problem Statement
Design and develop a web-based Minimart and Voucher System for Muhammadiyah Welfare Home, enabling users to request products and earn vouchers while providing administrators with robust management and reporting tools for `Muhammadiyah Welfare Home`.


## How to Login and test
* Deployed within vercel: 
 https://code-muggers-h4-g.vercel.app/
* Use any of the user email and password from this api: https://fakestoreapi.com/users 
* `Test User`:  
    * `email:` john@gmail.com
    * `password:` m38rmF$
* If you select role `Resident or Admin` it will redirect accordingly to the correct dashboard
* Due to the JSON data being hosted on the open source api, we did not account for `role` as  key because the api is not built by us, hence changing the data within there may not be ideal
* DO NOT REFRESH the browser, due to unfamiliarity and time constraints to maintain a database, the state is only maintained in localstorage within the browser session

## Tech stack used
* React framework bundled within vite module bundler
* Tailwindcss - to make use of in-built css classes
* Reactchartjs - for chart within admin dashboard
* Products and user data are fetched from open-source api: https://fakestoreapi.com/

## Assumptions made
* Default user accounts are retrieved using the open source api for login purposes (ie. we didn't cater for user account creation due to time constraint issues)
* Each resident is assigned with 500 default credits for them to redeem products
* User Api endpoint: https://fakestoreapi.com/users (log in using the email and password)
* Product Api endpoint: https://fakestoreapi.com/products


## Disclaimer
* Due to time-constraints, left out things like product preorder, vouchers and add to cart but `envisioned` within our prototype 
* Due to unfamiliarity with databases as well as time constraints, any changes to the initial data is stored using localStorage (ie. data does not persist once u refresh browser)
    * Although the API has a `POST` endpoint, which means the API probably has a way of storing the changes,
    in this case due to unfamiliarity with the API, we have taken the easier alternative of using `localStorage`
* However, esssential functionalities are included like:
    *  `Residents`: viewing & redeeming products, transactions, user dashboard
    * `Admin`: managing products, managing users 
