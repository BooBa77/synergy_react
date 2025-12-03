import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";
import OpenClosePage from "./pages/OpenClosePage";

/*
 Главный компонент приложения
 Настраивает маршрутизацию между страницами
 */
const App = () => {
    return (
        <Router>
            <div style={{ textAlign: "center" }}>
                {/* Навигационное меню */}
                <nav style={{ marginBottom: "20px", padding: "20px" }}>
                    <Link to="/" style={{ margin: "0 10px", textDecoration: "none" }}>
                        Главная
                    </Link>
                    <Link to="/redirect" style={{ margin: "0 10px", textDecoration: "none" }}>
                        Redirect
                    </Link>
                    <Link to="/open-close" style={{ margin: "0 10px", textDecoration: "none" }}>
                        Открыть/Закрыть
                    </Link>
                </nav>

                {/* Маршруты приложения */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/redirect" element={<RedirectPage />} />
                    <Route path="/open-close" element={<OpenClosePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;