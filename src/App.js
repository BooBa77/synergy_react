import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

/**
 * Главный компонент приложения
 * Управляет счетчиком кликов и изменяет фон на случайный цвет только на четных кликах
 * На нечетных кликах фон остается без изменений
 */
function App() {
    // Состояние для подсчета количества кликов
    const [clickCount, setClickCount] = useState(0);
    // Состояние для хранения текущего цвета фона
    const [backgroundColor, setBackgroundColor] = useState('#f4f4f4');

    /**
     * Генерирует случайный цвет в HEX формате
     * @returns {string} Случайный цвет в формате #RRGGBB
     */
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    /**
     * Обработчик клика по кнопке
     * На четных кликах меняет фон на случайный цвет
     * На нечетных кликах оставляет фон без изменений
     */
    const handleButtonClick = () => {
        const newCount = clickCount + 1;
        
        // Меняем фон только на четных кликах
        if (newCount % 2 === 0) {
            const randomColor = getRandomColor();
            setBackgroundColor(randomColor);
        }
        
        setClickCount(newCount);
    };

    // Определяем четность клика для изменения цвета кнопки
    const isEvenClick = clickCount % 2 === 0;

    return (
        <div
            className="app-container"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            {/* Компонент кнопки с обработчиком клика и информацией о четности */}
            <Button onClick={handleButtonClick} isEvenClick={isEvenClick} />
        </div>
    );
}

export default App;