import {createContext,useState,useEffect} from "react";
//import { getCategoriesAndDocuments } from "../firebase/firebase";
import axios from "axios";
export const ProductsContext=createContext({
  categoriesMap:[]
})

export const  ProductContextProvider=({children})=>{
  const [categoriesMap, setCategoriesMap] = useState();
  const getCategoriesMap = async () => {
    const {data} = await axios.get("http://localhost:3005/getdata");
    setCategoriesMap(data||[]);
  };
  
  useEffect(() => {
    getCategoriesMap();
  }, []);
  const value={categoriesMap}
  return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )

}
