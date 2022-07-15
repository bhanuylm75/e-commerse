import { useContext, Fragment } from 'react';

import { ProductsContext } from '../productcontext/index.context';
import ProductPreview from '../previewofproduct'; 

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(ProductsContext);
  console.log(categoriesMap)

  return (
    <Fragment>
      {categoriesMap?.map((each,index) => {
        const products = each.items;
        //console.log(products)
        const title=each.title
        return (
          <ProductPreview index={index} key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;