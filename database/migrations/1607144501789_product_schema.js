"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("title", 150).notNullable();
      table.string("description", 254).notNullable();
      table.float("price", 2).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
