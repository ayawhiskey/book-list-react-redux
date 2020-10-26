import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import ShoppingCartTableRow from './shopping-cart-table_row';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../actions';

 
const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => {
            return (
              <ShoppingCartTableRow
                key={idx}
                id={idx}
                item={item}
                idx={idx}
                onIncrease={onIncrease}
                onDelete={onDelete}
                onDecrease={onDecrease}/>
            )
          })}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );

}

const mapStateToProps = ({ shoppingCart: { cartItems: items, orderTotal: total } }) => {
  return {
    items,
    total
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
