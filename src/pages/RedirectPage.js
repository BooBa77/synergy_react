import React from "react";
import { useNavigate } from "react-router-dom";

/*
 Страница редиректа
 Демонстрирует использование useNavigate для навигации
 */
const RedirectPage = () => {
    // Хук для навигации между страницами
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Страница Redirect</h1>
            <button onClick={() => navigate("/")}>
                Вернуться на главную
            </button>
        </div>
    );
};

export default RedirectPage;