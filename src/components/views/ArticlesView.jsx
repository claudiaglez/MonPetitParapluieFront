import React, { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";
import Card from "../molecules/Card";
import Footer from "../molecules/Footer";

const ArticlesView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a la API cuando el componente se monta
    fetch("http://127.0.0.1:8000/api/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
        // Actualiza el estado con los datos de los artículos recibidos
        setArticles(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los artículos:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-beige-bg mt-16 grid grid-cols-3 gap-4 p-4">
        {/* Mapea los artículos y renderiza un componente Card para cada uno */}
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ArticlesView;
