import React, { useState, useEffect } from "react";
import "./Timer.css";

/**
 * Компонент таймера с управлением интервалом
 * Демонстрирует работу с useState и useEffect
 */
const Timer = () => {
    // Состояние для хранения текущего времени в секундах
    const [time, setTime] = useState(0);
    // Состояние для хранения интервала обновления (в миллисекундах)
    const [intervalTime, setIntervalTime] = useState(1000);
    // Состояние для управления запуском/остановкой таймера
    const [isRunning, setIsRunning] = useState(true);

    /**
     * useEffect для управления таймером
     * Запускает и очищает интервал в зависимости от состояния
     */
    useEffect(() => {
        // Если таймер остановлен, не создаем интервал
        if (!isRunning) return;

        // Создаем интервал для обновления времени
        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, intervalTime);

        // Функция очистки - удаляет интервал при размонтировании компонента
        return () => clearInterval(timer);
    }, [isRunning, intervalTime]); // Зависимости: перезапускаем эффект при изменении этих значений

    return (
        <div className="timer">
            <h2>Таймер</h2>
            <p>Прошло времени: {time} секунд</p>
            
            {/* Кнопка паузы/запуска */}
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Пауза" : "Запустить"}
            </button>
            
            {/* Кнопка сброса таймера */}
            <button onClick={() => setTime(0)}>Сброс</button>
            
            {/* Поле для изменения интервала обновления */}
            <input
                type="number"
                placeholder="Интервал (мс)"
                onChange={(e) => setIntervalTime(Number(e.target.value))}
            />
        </div>
    );
};

export default Timer;