# ecomm-app

## Project Description 
This is a mock ecommerce app that uses Firebase/Firestore as a database, built in React. (no create-react-app used for the fun of it, and assist my understanding of the tools)

## How to run
~~The site has been deployed to herkou: https://packshoponline.herokuapp.com/~~
The site has been deployed to railway: https://ecomm-app-production-b205.up.railway.app/

You can also clone this repo but you will need to add your own .env config in order to connect to firebase.
To develop this project, clone repo, run npm install. Then npm run dev to run a dev server.

## MVP
- 2 pages:

  - Home Page
    - Grid of products
    - Carousel of featured products
  - Product Page (with id parameter) - similar to a product page on another site, allows you to add to cart and select product variants

- All products should be stored in Firestore, you should store the following information:
  - quantity
  - variants (could be colors, sizes, etc)
  - price per unit
  - name
  - image url
  - favourited or not (boolean)
- All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application.
- Bonus
  - Using Firestore and react, create a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:
    - List of products in cart
    - ability to change quantity of products in cart
    - ability to remove items from cart
    - Make sure your site is scoped to one category of products.
  - maybe have a detailed product page

## How it works
The App consists of 2 pages, a home page and a product detailed page. When the app is rendered a useEffect hook is called once to get the data from the database. This database-data lives in the App state and is passed as props to relevant components. React Router is used to simulate 2 pages.  

## Thoughts

It was a little tricky to decided on the structure of the data in the database. The MVP requires variants for products and in the end I've opted for a very simple colour variance. In real life these variances would cause different data to be reflected to the user. ie Changing the colour should change the qty avaliable for purchase or price. 
To improve this I would change the database such that each product varient would also hold price modifier data ( -10, or +10). The price would be calculated by the component based upon a base value as well as what inputs have been selected by the user. 




## Screenshot
![alt text](https://raw.githubusercontent.com/CapSap/ecomm-app/master/Screenshot%202022-05-23%20at%2014-04-46%20Ecomm%20App.png
 "App screenshot")
