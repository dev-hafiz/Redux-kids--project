import React from 'react';
import { connect } from 'react-redux';
import SaveItem from '../SaveItem/SaveItem';

const SavedList = ({saved}) => {
     return (
          <div class="container m-5 row row-cols-1 row-cols-md-3 g-4">
              {
               saved?.length  === 0 ? <div>Not saved yet</div>
               : saved.map(save => <SaveItem key={save.id} save={save} />)
              } 
          </div>
     );
};
const getSavedFromStore = state =>{
     console.log(state);
     return {
          saved: state.savedList.saved
     }
}

export default connect(getSavedFromStore) (SavedList);