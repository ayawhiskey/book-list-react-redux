const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  } 

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
}

const updateOrCreateCartItem = (book, item = {}, qty) => {
  
  const { 
    id = book.id, 
    title = book.title, 
    count = 0, 
    total = 0 } = item;

  return {
    id,
    title,
    count: count + qty,
    total: total + qty*book.price
  }

}

const updateOrder = (state, bookId, qty) => {

  const { booksList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateOrCreateCartItem(book, item, qty);      
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
  
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case 'BOOK_ADDED_TO_CART': 
    return updateOrder(state, action.payload, 1);
  
  case 'BOOK_REMOVED_FROM_CART': 
    return updateOrder(state, action.payload, -1);
  
  case 'ALL_BOOKS_REMOVED_FROM_CART':
    const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
    return updateOrder(state, action.payload, -item.count);
  
    default:
      return state.shoppingCart;
  }

}

export default updateShoppingCart;