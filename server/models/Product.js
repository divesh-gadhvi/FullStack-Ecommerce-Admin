import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    //all are required=true columns. For now not add the check
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
