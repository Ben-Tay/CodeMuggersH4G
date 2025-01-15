# CodeMuggersH4G
This is the repository for the Hack4Good project by team `Code Muggers`.

We have specifically chosen the problem statement 1 by `Muhammadiyah Welfare Home`
to implement a solution.


## Tech stack used
* React framework bundled within vite module bundler
* Tailwindcss - to make use of in-built css classes
* Products and user data are fetched from open-source api: https://fakestoreapi.com/

## Assumptions made
* Default user accounts are retrieved using the open source api for login purposes (ie. we didn't cater for user account creation due to time constraint issues)
* User Api endpoint: https://fakestoreapi.com/users (log in using the email and password)
* Product Api endpoint: https://fakestoreapi.com/products

## Disclaimer
* Due to time-constraints, left out things like product preorder and add to cart, as well as admin dashboard but envisioned within our prototype
* Due to unfamiliarity with databases as well as time constraints, any changes to the initial data is stored using localStorage (ie. data does not persist once u refresh browser)
    * Although the API has a `POST` endpoint, which means the API probably has a way of storing the changes,
    in this case due to unfamiliarity with the API, we have taken the easier alternative of using `localStorage`
* However, esssential functionalities are included like:
    *  `Residents`: viewing & redeeming products, transactions, user dashboard
    * `Admin`: managing products, managing users 


## Deployed version (Hosted within vercel)
* 