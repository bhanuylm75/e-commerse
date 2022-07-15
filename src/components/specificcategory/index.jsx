import { useContext, useState, Fragment ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Productcard from '../productcard';

import { ProductsContext } from '../productcontext/index.context';

import './index.css';

const Category = () => {
  const { id,title } = useParams();
  const { categoriesMap } = useContext(ProductsContext);
  const [pro, setPro] = useState([]);
  const num=parseInt(id)
 const fun= async()=>{
  const details= await categoriesMap[num].items
  setPro(details)
 }
  useEffect(() => {
  fun();
  },);


  return (
    <Fragment>
      <h2 className='category-title'>{title.toUpperCase()}</h2>
      <div className='category-container'>
        {
          pro.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;