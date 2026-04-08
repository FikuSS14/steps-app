import React from 'react';

function TableRow({ item, onDelete, onEdit }) {
  const formatDate = (dateStr) => {
    return dateStr;
  };

  return (
    <tr>
      <td>{formatDate(item.date)}</td>
      <td>{item.distance}</td>
      <td className="actions">
        <button 
          className="edit-btn" 
          onClick={() => onEdit(item)}
          title="Редактировать"
        >
          ✎
        </button>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(item.id)}
          title="Удалить"
        >
          ✘
        </button>
      </td>
    </tr>
  );
}

export default TableRow; 