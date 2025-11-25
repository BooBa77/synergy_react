import React from 'react';
import './Button.css';

/**
 * Компонент кнопки с кастомными стилями
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onClick - Функция обработки клика
 */
const Button = ({ onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            Очистить
        </button>
    );
};

export default Button;