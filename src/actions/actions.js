

export const searchPoducts = payload => {
     return{
          type:'SEARCH_PRODCTS',
          payload
     }
}

export const addSavedItem = payload =>{
     return{
          type:'ADD_ITEM',
          payload
     }
}

export const removeSavedItem = payload =>{
     return{
          type:'REMOVE_ITEM',
          payload
     }
}