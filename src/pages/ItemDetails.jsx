import { useParams } from "react-router-dom"
import { useItemCollection } from "../hooks/useItemCollection"
import LoaderComponent from "../components/LoaderComponent/LoaderComponent"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"



const ItemDetails = () => {

    const {itemId} = useParams();

    const {data, loading} = useItemCollection("products", itemId)

  return loading ? <LoaderComponent /> : <ItemDetailContainer productData={data} />
}

export default ItemDetails