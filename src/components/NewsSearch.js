import React, { useState } from 'react';

/**
 * Компонент поиска новостей
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onSearch - Функция обработки поиска
 */
const NewsSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    /**
     * Обработчик нажатия кнопки поиска
     */
    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    /**
     * Обработчик нажатия клавиши Enter
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="news-search">
            <input
                type="text"
                placeholder="Введите тему, например: sport, politics, technology"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Поиск</button>
        </div>
    );
};

export default NewsSearch;