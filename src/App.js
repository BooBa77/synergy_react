import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearch from './components/NewsSearch';
import NewsList from './components/NewsList';
import './App.css';

/**
 * Главный компонент приложения для поиска новостей The Guardian
 * Использует API The Guardian для получения реальных новостей
 */
const App = () => {
    // Ключ API The Guardian
    const API_KEY = 'e726198d-3b30-418d-82b7-0a01d64fea2a';
    const API_URL = 'https://content.guardianapis.com/search';
    
    // Состояния приложения
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('technology');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    /**
     * Загрузка новостей из API The Guardian
     * @param {string} query - Поисковый запрос
     * @param {number} page - Номер страницы
     */
    const fetchNews = async (query = searchQuery, page = currentPage) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await axios.get(API_URL, {
                params: {
                    'api-key': API_KEY,
                    q: query,
                    page: page,
                    'show-fields': 'headline,trailText,thumbnail',
                    'page-size': 10, // Количество новостей на странице
                    'order-by': 'newest' // Сортировка по новизне
                }
            });
            
            const data = response.data.response;
            
            if (data.results && data.results.length > 0) {
                setArticles(data.results);
                setTotalPages(data.pages || 1);
                console.log(`Загружено ${data.results.length} новостей, всего страниц: ${data.pages}`);
            } else {
                setArticles([]);
                setError('По вашему запросу новостей не найдено. Попробуйте другой запрос.');
            }
        } catch (err) {
            console.error('API Error Details:', err.response || err.message);
            
            if (err.response) {
                // Ошибка от API
                if (err.response.status === 403) {
                    setError('Ошибка доступа к API. Проверьте API ключ.');
                } else if (err.response.status === 429) {
                    setError('Слишком много запросов. Попробуйте позже.');
                } else {
                    setError(`Ошибка API: ${err.response.status} - ${err.response.statusText}`);
                }
            } else if (err.request) {
                // Ошибка сети
                setError('Ошибка сети. Проверьте подключение к интернету.');
            } else {
                // Другие ошибки
                setError('Произошла ошибка при загрузке новостей.');
            }
            
            setArticles([]);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Обработчик изменения страницы
     * @param {number} direction - Направление (-1 для предыдущей, 1 для следующей)
     */
    const handlePageChange = (direction) => {
        const newPage = currentPage + direction;
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            fetchNews(searchQuery, newPage);
        }
    };

    /**
     * Обработчик поиска
     * @param {string} query - Поисковый запрос
     */
    const handleSearch = (query) => {
        if (query.trim()) {
            setSearchQuery(query);
            setCurrentPage(1);
            fetchNews(query, 1);
        }
    };

    /**
     * Обработчик сброса поиска
     */
    const handleReset = () => {
        setSearchQuery('technology');
        setCurrentPage(1);
        fetchNews('technology', 1);
    };

    // Загружаем новости при монтировании компонента
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="app">
            <h1>Новости The Guardian</h1>
            <p className="api-info">
                Используется реальный API The Guardian. Ключ: {API_KEY.substring(0, 8)}...
            </p>
            
            <NewsSearch onSearch={handleSearch} />
            
            <div className="search-controls">
                <button onClick={handleReset} className="reset-btn">
                    Сбросить к "technology"
                </button>
                {searchQuery && (
                    <span className="current-query">
                        Текущий запрос: <strong>{searchQuery}</strong>
                    </span>
                )}
            </div>
            
            {loading && (
                <div className="loading">
                    <p>Загрузка новостей...</p>
                    <div className="spinner"></div>
                </div>
            )}
            
            {error && <p className="error">{error}</p>}
            
            {!loading && !error && (
                <>
                    <NewsList articles={articles} />
                    
                    {articles.length > 0 && (
                        <div className="pagination">
                            <button 
                                onClick={() => handlePageChange(-1)}
                                disabled={currentPage === 1 || loading}
                            >
                                Предыдущая
                            </button>
                            
                            <span className="page-info">
                                Страница: {currentPage} из {totalPages}
                            </span>
                            
                            <button 
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === totalPages || loading}
                            >
                                Следующая
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default App;