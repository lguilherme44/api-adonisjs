"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

// Products
Route.get("/products", "ProductController.index").middleware("auth");
Route.get("/products/:id", "ProductController.show").middleware("auth");
Route.post("/product", "ProductController.store").middleware("auth");
Route.put("/product/:id", "ProductController.update").middleware("auth");
Route.delete("/product/:id", "ProductController.destroy").middleware("auth");
