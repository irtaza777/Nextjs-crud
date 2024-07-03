"use client";

import Updateproduct from "../../components/UpdateProduct";


export default async function UpdateProduct({ params }) {

  const { id } = params;
  const  product = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
 

  if (!product.ok) {
    throw new Error('Network response was not ok');
}

const productData = await product.json();
//console.log(productData)
  return( <Updateproduct product={ productData } />)
}