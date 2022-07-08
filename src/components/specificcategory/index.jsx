import { useContext,  Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Productcard from '../productcard';

import { ProductsContext } from '../productcontext/index.context';

import './index.css';

const Category = () => {
  const { id,title } = useParams();
  const { categoriesMap } = useContext(ProductsContext);
  const products=categoriesMap[id].items
  console.log(products)

  return (
    <Fragment>
      <h2 className='category-title'>{title.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;