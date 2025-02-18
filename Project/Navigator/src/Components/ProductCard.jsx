import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Men's Casual Shirt", category: "Clothing", price: 29, img: "Men's Casual Shirt" },
  { id: 2, name: "Women's Summer Dress", category: "Clothing", price: 49, img: "Women's Summer Dress" },
  { id: 3, name: "Gold Necklace", category: "Jewelry", price: 199, img: "Gold Necklace" },
  { id: 4, name: "Diamond Ring", category: "Jewelry", price: 499, img: "Diamond Ring" },
  { id: 5, name: "Smartphone X", category: "Electronics", price: 799, img: "Smartphone X" },
  { id: 6, name: "Laptop Pro", category: "Electronics", price: 1299, img: "Laptop Pro" },
  { id: 7, name: "Wireless Earbuds", category: "Electronics", price: 99, img: "Wireless Earbuds" },
  { id: 8, name: "Leather Jacket", category: "Clothing", price: 149, img: "Leather Jacket" },
  { id: 9, name: "Silver Bracelet", category: "Jewelry", price: 89, img: "Silver Bracelet" },
  { id: 10, name: "4K Smart TV", category: "Electronics", price: 899, img: "4K Smart TV" },
  { id: 11, name: "Running Shoes", category: "Clothing", price: 79, img: "Running Shoes" },
  { id: 12, name: "Pearl Earrings", category: "Jewelry", price: 59, img: "Pearl Earrings" },
  { id: 13, name: "Gaming Console", category: "Electronics", price: 499, img: "Gaming Console" },
  { id: 14, name: "Denim Jeans", category: "Clothing", price: 39, img: "Denim Jeans" },
  { id: 15, name: "Platinum Watch", category: "Jewelry", price: 299, img: "Platinum Watch" },
  { id: 16, name: "Bluetooth Speaker", category: "Electronics", price: 69, img: "Bluetooth Speaker" },
  { id: 17, name: "Winter Coat", category: "Clothing", price: 129, img: "Winter Coat" },
  { id: 18, name: "Rose Gold Ring", category: "Jewelry", price: 149, img: "Rose Gold Ring" },
  { id: 19, name: "Smartwatch", category: "Electronics", price: 199, img: "Smartwatch" },
  { id: 20, name: "Formal Suit", category: "Clothing", price: 199, img: "Formal Suit" },
  { id: 21, name: "Elegant Pendant", category: "Jewelry", price: 79, img: "Elegant Pendant" }
];

export default function ProductCard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("low");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search Product..."
          className="border p-4 rounded-lg w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Electronics">Electronics</option>
        </select>
        <select
          className="border p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div key={product.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="p-6 border rounded-3xl shadow-xl bg-white text-center hover:shadow-2xl transition-all transform hover:scale-105">
              {/* Image placeholder */}
              <div className="w-full h-48 bg-gradient-to-r from-purple-300 to-purple-600 text-xl flex items-center justify-center text-white font-semibold rounded-lg mb-4">
                {product.img}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <p className="text-2xl font-bold text-purple-600 mb-4">${product.price}</p>
              <button className="w-full bg-purple-500 text-white p-3 rounded-lg font-semibold hover:bg-purple-600 transition-all transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
