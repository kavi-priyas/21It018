import React from 'react';

const productsData = [
  {
    "productName": "Laptop 5",
    "price": 7980,
    "rating": 4.89,
    "discount": 89,
    "availability": "yes"
  },
  {
    "productName": "Laptop 3",
    "price": 9102,
    "rating": 4.5,
    "discount": 98,
    "availability": "yes"
  },
  {
    "productName": "Laptop 10",
    "price": 4101,
    "rating": 4.08,
    "discount": 37,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.03,
    "discount": 63,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 14",
    "price": 9254,
    "rating": 3.99,
    "discount": 56,
    "availability": "yes"
  },
  {
    "productName": "Laptop 1",
    "price": 1059,
    "rating": 3.27,
    "discount": 21,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 10",
    "price": 7145,
    "rating": 2.67,
    "discount": 15,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 11",
    "price": 2652,
    "rating": 2.67,
    "discount": 70,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 1244,
    "rating": 2.02,
    "discount": 45,
    "availability": "yes"
  },
  {
    "productName": "Laptop 9",
    "price": 1742,
    "rating": 1.71,
    "discount": 39,
    "availability": "yes"
  }
];

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productsData.map((product, index) => (
          <li key={index}>
            <strong>{product.productName}</strong> - ${product.price} <br />
            Rating: {product.rating} <br />
            Discount: {product.discount}% <br />
            Availability: {product.availability}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
