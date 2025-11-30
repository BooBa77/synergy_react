import React from 'react';
import './Button.css';

/**
 * Компонент кнопки с изменением цвета только на четные клики
 * Демонстрирует условный рендеринг CSS-классов
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onClick - Обработчик клика
 * @param {boolean} props.isEvenClick - Флаг четного клика
 */
const Button = ({ onClick, isEvenClick }) => {
    // Формируем класс кнопки в зависимости от четности клика
    const buttonClass = `custom-button ${isEvenClick ? 'clicked' : ''}`;
    
    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            Изменить цвет
        </button>
    );
};

export default Button;