import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import LoaderComponent from "../components/LoaderComponent/LoaderComponent"
import { useCollection } from "../hooks/useCollection"

const Home = () => {

    const {data, loading} = useCollection("products")

  return loading ? <LoaderComponent /> : <ItemListContainer productsData={data} />
}

export default Home