import { Link } from 'react-router-dom';

import Productcard from "../productcard/index.jsx"

import './index.css';

const ProductPreview = ({ title, products,index }) => {
  console.log(`${index} ${title}`)
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={`${title}${index}`}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='main'>
        {products
          .filter((each,id) => id < 4)
          .map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ProductPreview

