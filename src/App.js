import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error('Ошибка загрузки:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App v1.0.0</h1>
        
        <section>
          <h2>Текущая дата и время (Day.js):</h2>
          <p>{currentDate}</p>
        </section>

        <section>
          <h2>Данные из API (Axios):</h2>
          {data ? (
            <div style={{ textAlign: 'left' }}>
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Body:</strong> {data.body}</p>
            </div>
          ) : (
            <p>Загрузка...</p>
          )}
        </section>

        <section>
          <h2>Информация о проекте:</h2>
          <p>React проект инициализирован (K1)</p>
          <p>Подключены 2 библиотеки: dayjs и axios (K3)</p>
          <p>Готов к загрузке на GitHub (K4)</p>
        </section>
      </header>
    </div>
  );
}

export default App;