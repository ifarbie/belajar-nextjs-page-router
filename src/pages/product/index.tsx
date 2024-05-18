import { getFirestoreService } from "@/lib/firebase/service";
import ProductViews from "@/views/Product/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProduct] = useState([]);
  
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  return (
    <div> 
      <ProductViews products={products} />
    </div>
  );
};

export default ProductPage;
