import { combineReducers } from 'redux';
import data from '../data/products.json';

const initialState = {
     products : data,
     inputSearch:'',
     saved: []
}

const productsList = (state = initialState, action) =>{
     if(action.type === 'SEARCH_PRODCTS'){
          return{
               products: state.products,
               inputSearch: action.payload
          };
     };
     return state;
}

const savedList = (state = initialState, action) =>{

     if(action.type === 'ADD_ITEM'){
          return{
               ...state,
               saved: [...state.saved, action.payload]
          }
     }

     else if(action.type === 'REMOVE_ITEM'){
          return{
               ...state,
               saved: state.saved.filter(item => item.id !== action.payload)
          }
     }
     return state;
}

export default combineReducers({
     productsList,
     savedList
})





