import React from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();

    const dataCollection = collection(db, collectionName);

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};
