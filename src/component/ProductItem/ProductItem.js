import React from 'react';
import { connect } from 'react-redux';
import './ProductsItem.css';
import {addSavedItem} from '../../actions/actions';

const ProductItem = ({course, addSavedItem}) => {
     const {title, img , price } = course || {}
     return (
            <div className="col">
              <div className="card h-100">
               <img src={img} className="card-img-top" alt="..." />
               <div className="card-body">
               <h5 className="card-title text-start">{title}</h5>
               
               </div>
               <div className="card-footer ">

               <span onClick={ ()=> addSavedItem(course)} className="add ms-3">🛒 ADD</span>
               <h4 className="text-end fw-bold"> $ {price}</h4>
               </div>
          </div>
          </div>
     );
};

export default connect(null, {addSavedItem}) (ProductItem);