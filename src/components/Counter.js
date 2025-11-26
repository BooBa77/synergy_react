import React, { useState, useEffect } from "react";
import "./Counter.css";

/**
 * Компонент счетчика с управлением через кнопки и клавиатуру
 * Демонстрирует работу с состоянием (useState) и побочными эффектами (useEffect)
 */
const Counter = () => {
    // Состояние для хранения текущего значения счетчика
    const [count, setCount] = useState(0);

    /**
     * Обработчик нажатия клавиш для управления счетчиком
     * Стрелка вверх - увеличить, стрелка вниз - уменьшить
     */
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "ArrowUp") {
                setCount((prev) => prev + 1);  // Увеличиваем счетчик
            }
            if (event.key === "ArrowDown") {
                setCount((prev) => prev - 1);  // Уменьшаем счетчик
            }
        };

        // Добавляем обработчик события нажатия клавиш
        window.addEventListener("keydown", handleKeyPress);

        // Очистка: удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

    return (
        <div className="counter">
            <h2>Счетчик</h2>
            <p>Текущее значение: {count}</p>
            {/* Кнопки для управления счетчиком */}
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
            {/* Подсказка для пользователя */}
            <p style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                По дополнительному заданию можно использовать стрелки ↑ и ↓ на клавиатуре
            </p>
        </div>
    );
};

export default Counter;