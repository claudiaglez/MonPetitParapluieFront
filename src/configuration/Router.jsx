import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../components/views/HomeView";
import FormView from "../components/views/FormView";
import ArticlesView from "../components/views/ArticlesView";
import ArticleDetailsView from "../components/views/ArticleDetailsView";
import CategoryView from "../components/views/CategoryView";
import UpdateArticleView from "../components/views/UpdateArticleView";
import ProyectoView from "../components/views/ProyectoView";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a la API cuando el componente se monta
    fetch('http://127.0.0.1:8000/api/articles')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.data);
      })
      .catch(error => {
        console.error('Error al obtener los artículos:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}></Route>
        <Route path='/proyecto' element={<ProyectoView/>}></Route>
        <Route path='/form' element={<FormView/>}></Route>
        {/* Pasamos los artículos como prop a ArticlesView y ArticleDetailsView */}
        <Route path='/articles' element={<ArticlesView articles={articles} />}></Route>
        <Route path='/article/:id' element={<ArticleDetailsView articles={articles} />}></Route>
        <Route path='/categories/:category' element={<CategoryView />} />
        <Route path='/update/article/:id' element={<UpdateArticleView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

