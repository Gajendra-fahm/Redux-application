import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductListDataAction } from '../Redux/BuyBookAction'

const ProductList = () => {
  
    const productList = useSelector((state)=>state.productListData);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ProductListDataAction());
    }, [dispatch])

    // show errors
    if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div>
    <p>Product List:</p>
    {productList?.length > 0 ? (
      productList.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))
    ) : (
      <p>No products available</p>
    )}
  </div>
  )
}

export default ProductList
