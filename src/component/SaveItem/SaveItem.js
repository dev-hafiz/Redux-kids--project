import React from 'react';
import { connect } from 'react-redux';
import {removeSavedItem} from '../../actions/actions';
import './SaveItem.css';

const SaveItem = ({save, removeSavedItem}) => {
     const {title, price, img, id} = save || {};
     return (
          <div class="col cart-area">
          <span onClick={ ()=> removeSavedItem(id)} className="remove__button">X</span>
          <div class="card w-75">
            <img src={img} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p>${price}</p>
            </div>
          </div>
        </div>
     );
};

export default connect(null, {removeSavedItem}) (SaveItem);