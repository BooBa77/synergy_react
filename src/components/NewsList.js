import React from 'react';

/**
 * Компонент для отображения списка новостей
 * @param {Object} props - Свойства компонента
 * @param {Array} props.articles - Массив статей
 */
const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.length === 0 ? (
                <p>Новостей не найдено. Попробуйте другой запрос.</p>
            ) : (
                articles.map((article, index) => (
                    <div key={index} className="news-item">
                        <h3>{article.webTitle}</h3>
                        <p>
                            <a 
                                href={article.webUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Читать статью
                            </a>
                        </p>
                    </div>
                ))
            )}
        </div>
    );
};

export default NewsList;