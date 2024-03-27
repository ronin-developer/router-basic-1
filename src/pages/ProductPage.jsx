import React, { useEffect, useState } from 'react';
import PostService from '../services/postService';
import SingleProductComponent from '../components/SingleProductComponent';

function ProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    PostService.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, []);

  return (
    <div>
      <h2 className='text-2xl mb-6'>Product Page</h2>
      {!isLoading && <SingleProductComponent product={singleProduct} />} {/* Render SingleProductComponent when isLoading is false */}
    </div>
  );
}

export default ProductPage;
