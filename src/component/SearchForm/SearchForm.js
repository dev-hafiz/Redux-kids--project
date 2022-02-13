import React from 'react';
import { connect } from 'react-redux';
import {searchPoducts} from '../../actions/actions';
import './SearchForm.css';

const SearchForm = ({searchPoducts, inputSearch}) => {
    
     return (
          <div>
               <form className="search__form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="🔍 Search your products..." className="input__search" 
                    id=""
                    onChange={ (event)=> searchPoducts(event.target.value)}
                    value={inputSearch}
                     />
               </form>
          </div>
     );
};

const getInputSearch = state =>{
     // console.log(state);     
     return{
          inputSearch: state.productsList.inputSearch
     }
}

export default connect(getInputSearch, {searchPoducts}) (SearchForm);