import React, { useState } from 'react';

function Form({ onAdd, editData, clearEdit }) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  React.useEffect(() => {
    if (editData) {
      setDate(editData.date);
      setDistance(editData.distance);
    } else {
      setDate('');
      setDistance('');
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!date || !distance) {
      alert('Заполните оба поля');
      return;
    }
    
    const distanceNum = parseFloat(distance);
    if (isNaN(distanceNum) || distanceNum <= 0) {
      alert('Введите корректное расстояние (число больше 0)');
      return;
    }
    
    onAdd(date, distanceNum);
    
    setDate('');
    setDistance('');
    clearEdit(); 
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Дата (ДД.ММ.ГГГГ)</label>
        <input
          type="text"
          placeholder="20.07.2019"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>Пройдено км</label>
        <input
          type="number"
          step="0.1"
          placeholder="5.7"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      
      <button type="submit">OK</button>
      
      {editData && (
        <button type="button" onClick={clearEdit}>
          Отмена
        </button>
      )}
    </form>
  );
}

export default Form;