# ecomm-app

## Project Description 
This is a mock ecommerce app that uses Firebase/Firestore as a database, built in React. (no create-react-app used for the fun of it, and assist my understanding of the tools)

## How to run
The site has been deployed to herkou: https://packshoponline.herokuapp.com/

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


## Screenshot
