import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const { categoryName } = useParams();
  const { data, loading } = useCollection("products");

  React.useEffect(() => {
    const productsFiltered = data.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryName]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={productsFiltered} />
  );
};

export default Category;
