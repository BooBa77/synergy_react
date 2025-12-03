import React, { useState, useEffect } from "react";

/*
 Главная страница приложения
 Отображает информацию о браузере, времени и курсоре
 */
const Home = () => {
    // Состояние для текущего времени
    const [time, setTime] = useState(new Date());
    // Состояние для координат курсора
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Обновляем время каждую секунду
        const interval = setInterval(() => setTime(new Date()), 1000);

        // Обработчик движения мыши
        const handleMouseMove = (event) => {
            setCursorPosition({ 
                x: event.clientX, 
                y: event.clientY 
            });
        };
        
        // Добавляем обработчик движения мыши
        window.addEventListener("mousemove", handleMouseMove);

        // Очистка при размонтировании компонента
        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Пустой массив зависимостей - эффект только при монтировании

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Добро пожаловать!</h1>
            <p>Дата: {time.toLocaleDateString()}</p>
            <p>
                Время: {time.toLocaleTimeString()} (UTC{" "}
                {time.getTimezoneOffset() / 60})
            </p>
            <p>UserAgent: {navigator.userAgent}</p>
            <p>
                ViewPort: {window.innerWidth} x {window.innerHeight}, 
                Плотность пикселей: {window.devicePixelRatio}
            </p>
            <p>
                Координаты курсора: X: {cursorPosition.x}, Y: {cursorPosition.y}
            </p>
        </div>
    );
};

export default Home;