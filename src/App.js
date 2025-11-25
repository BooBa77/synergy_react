import React, { useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

/* Связывание компонентов через ref */
function App() {
    // ref для доступа к DOM-элементу input
    const inputRef = useRef(null);

    /*
     * Функция очистки поля ввода
     * ref для прямого доступа к input элементу
     */
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = "";  // Очищаем значение
            inputRef.current.focus();     // Возвращаем фокус на поле ввода
        }
    };

    return (
        <div className="app-container">
            {/* Компонент Input с переданным ref */}
            <Input 
                ref={inputRef} 
                placeholder="Введите текст..."
            />
            
            {/* Компонент Button с обработчиком onClick */}
            <Button onClick={handleClear} />
        </div>
    );
}

export default App;