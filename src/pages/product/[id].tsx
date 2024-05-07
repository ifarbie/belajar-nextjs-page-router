import { useRouter } from "next/navigation";
import React from "react";

const ProductDetailsPage = () => {
    const router = useRouter();
    console.log(router);
    return <div>Product Details</div>;
};

export default ProductDetailsPage;
