import React from "react";
import ProductDetails from "../features/product-list/component/ProductDetails";
import Navbar from "../features/navbar/Navbar";

function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
}

export default ProductDetailPage;
