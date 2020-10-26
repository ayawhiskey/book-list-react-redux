import React from 'react';

const ShoppingCartTableRow = ({ item, idx, onDecrease, onDelete, onIncrease}) => {
  const { id, title, count, total } = item;
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          onClick={() => onIncrease(id)}
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          onClick={() => onDecrease(id)}
          type="button"
          className="btn btn-outline-warning btn-sm float-right"
        >
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
)}

export default ShoppingCartTableRow;