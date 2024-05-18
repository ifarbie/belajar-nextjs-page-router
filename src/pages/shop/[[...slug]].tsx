import { useRouter } from "next/router";
import React from "react";

const ShopPage = () => {
    const { query } = useRouter();
    const slug = query.slug;
    return (
        <div>
            <h1>ShopPage</h1>
            <h2>Product: {`${slug ? slug[0] : ""}`}</h2>
        </div>
    );
};

export default ShopPage;
