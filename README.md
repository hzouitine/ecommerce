# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

# Business overview

It has two main features :
- Displaying a list of products in the /products page with the possibility of adding products to the card using the Add to Cart button
- A cart page /cart where users can adjust quantities of products and remove them from the cart. The total price of products in the cart is automatically calculated after any adjustement.

Design tweaks : 
-A Tostr is shown after adding a product to the cart
-The number of products in the cart is shown in the navbar

# Technical overview

-The state of the cart is manager by RxJs in a service provided in root, it is preferred to use tools for state management like Redux.
-Page links are configured using RouterModule with Lazy Modules.