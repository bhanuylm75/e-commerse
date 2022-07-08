import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview';
import Category from "../specificcategory"


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title:id' element={<Category />} />
    </Routes>
  );
};

export default Shop;