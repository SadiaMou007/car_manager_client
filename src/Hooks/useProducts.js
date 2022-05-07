import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useProducts;
// https://secure-journey-72312.herokuapp.com
//https://stackoverflow.com/questions/72156463/how-can-i-update-the-ui-while-update-collection-property-from-server-api
