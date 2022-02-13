import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import SearchForm from '../SearchForm/SearchForm';


const ProductsList = ({products, inputSearch}) => {
     const filtered = products.filter(product => product.title.toLowerCase().includes(inputSearch.toLowerCase()))
     return (
     <>
     <SearchForm/>
     <div className="container  mt-5">
     <div className="row row-cols-1 row-cols-md-3 g-4">
     { filtered.length === 0 ? <span className="text-warning">Hey! Search reasult not match...</span>
     :
     filtered.map( (course) => <ProductItem key={course.id} course={course}/>)
     }
     </div>
     </div>
     </>
     );
};
const getProductFromStore = state =>{
     // console.log(state);     
     return{
          products: state.productsList.products,
          inputSearch: state.productsList.inputSearch
     }
}
export default connect(getProductFromStore) (ProductsList);