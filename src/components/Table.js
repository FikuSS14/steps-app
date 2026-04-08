import React from 'react';
import TableRow from './TableRow';

function Table({ items, onDelete, onEdit }) {
  if (items.length === 0) {
    return (
      <div className="empty-table">
        Нет данных. Добавьте первую тренировку!
      </div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableRow
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;