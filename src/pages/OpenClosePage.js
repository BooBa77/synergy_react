import React, { useState } from "react";

/*
 Страница для открытия и закрытия окон браузера
 Демонстрирует работу с window.open и window.close
 */
const OpenClosePage = () => {
    // Состояние для хранения URL
    const [url, setUrl] = useState("");

    /*
     Открывает новую вкладку с введенным URL
     */
    const handleOpenPage = () => {
        if (url) {
            window.open(url, "_blank");
        } else {
            alert("Введите URL!");
        }
    };

    /*
     Закрывает текущее окно браузера
     Примечание: работает только для окон, открытых через window.open()
     */
    const handleClosePage = () => {
        window.close();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Открыть/Закрыть страницу</h1>
            
            {/* Поле для ввода URL */}
            <input
                type="text"
                placeholder="Введите URL (например,https://synergy.ru/)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ 
                    marginRight: "10px", 
                    padding: "5px",
                    width: "300px" 
                }}
            />
            
            {/* Кнопка открытия страницы */}
            <button onClick={handleOpenPage}>
                Открыть страницу
            </button>
            
            <br />
            
            {/* Кнопка закрытия страницы */}
            <button 
                onClick={handleClosePage} 
                style={{ marginTop: "20px" }}
            >
                Закрыть страницу
            </button>
            {/* Кнопка не будет работать из-за безопасномти браузера */}
        </div>
    );
};

export default OpenClosePage;