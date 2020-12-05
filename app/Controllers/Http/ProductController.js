"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index() {
    const products = await Product.all();

    return products;
  }

  async store({ request }) {
    const data = request.only(["title", "description", "price"]);

    const product = await Product.create(data);

    return product;
  }

  async show({ params }) {
    const { id } = params;

    const product = await Product.findOrFail(id);

    return product;
  }

  async update({ params, request }) {
    const { id } = params;
    const data = request.all();

    const searchProduct = await Product.findOrFail(id);

    if (searchProduct) {
      const update = await Product.query().where("id", id).update(data);

      return update;
    }
  }

  async destroy({ params, request, response }) {
    const { id } = params;

    const product = await Product.findOrFail(id);

    await product.delete();
  }
}

module.exports = ProductController;
