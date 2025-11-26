import React, { useState } from "react";
import "./Counter.css";

/**
 * Компонент счетчика с кнопками увеличения/уменьшения
 * Демонстрирует работу с состоянием через useState
 */
const Counter = () => {
    // Используем хук useState для управления состоянием счетчика
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Счетчик</h2>
            <p>Текущее значение: {count}</p>
            {/* Кнопка увеличения счетчика */}
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            {/* Кнопка уменьшения счетчика */}
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
    );
};

export default Counter;