
import updateBooklist from './book-list';
import updateShoppingCart from './shopping-cart';


const reducer = (state, action) => {

  return {
    booksList: updateBooklist(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }

}

export default reducer;
