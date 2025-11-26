import React from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import "./App.css";

/**
 * Главный компонент приложения
 * Отображает компоненты Counter и Timer
 */
const App = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px"}}>
            <h1>React State App</h1>
            <p>Демонстрация работы с состоянием в React</p>
            
            {/* Рендерим компонент счетчика */}
            <Counter />
            
            {/* Рендерим компонент таймера */}
            <Timer />
        </div>
    );
}

export default App;