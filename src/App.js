import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const parseDate = (dateStr) => {
    const parts = dateStr.split('.');
    return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  };

  const sortByDate = (items) => {
    return [...items].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA; 
    });
  };

  const handleAdd = (date, distance) => {
    setData((prevData) => {
      const existingIndex = prevData.findIndex((item) => item.date === date);
      
      let newData;
      if (existingIndex !== -1) {
        newData = prevData.map((item, index) => {
          if (index === existingIndex) {
            return {
              ...item,
              distance: item.distance + distance,
            };
          }
          return item;
        });
      } else {
        newData = [
          ...prevData,
          {
            id: Date.now(),
            date: date,
            distance: distance,
          },
        ];
      }
      
      return sortByDate(newData);
    });
  };

  const handleDelete = (id) => {
    setData((prevData) => {
      const newData = prevData.filter((item) => item.id !== id);
      return sortByDate(newData);
    });
  };

  const handleEdit = (item) => {
    setEditItem(item);
    handleDelete(item.id);
  };

  const clearEdit = () => {
    setEditItem(null);
  };

  return (
    <div className="app">
      <h1>Учёт тренировок</h1>
      <Form onAdd={handleAdd} editData={editItem} clearEdit={clearEdit} />
      <Table items={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;