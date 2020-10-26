const updateBooklist = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null
    }
  }

  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        error: null,
        loading: true,
      };
    
    case 'FETCH_BOOKS_SUCCESS':
      return {
        error: null,
        books: action.payload,
        loading: false,
      };
    
    case 'FETCH_BOOKS_FAILURE': 
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

      
    default:
      return state.booksList;
  }

}

export default updateBooklist;