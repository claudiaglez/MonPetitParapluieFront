import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const ArticleDetailsView = ({ articles }) => {
  console.log("Articles in ArticleDetailsView:", articles);
  const { id } = useParams();
  console.log("ID from URL:", id);
  const articleDetail = articles.find((article) => article.id === parseInt(id));

  if (!articleDetail) {
    return <div>No se encontró el artículo.</div>;
  }

  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log("handleEditClick ejecutado");
    navigate(`/update/article/${articleDetail.id}`, {
      state: { article: articleDetail },
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-beige-bg flex justify-center items-center h-screen">
        <div className="max-w-4xl mx-auto flex items-center">
          <img
            className="h-auto max-w-xl max-h-64 rounded-lg shadow-xl dark:shadow-gray-800"
            src={articleDetail.image_url}
            alt={articleDetail.title}
          />
          <div className="ml-8">
            <h2 className="text-indigo text-2xl">
              {articleDetail.title}
            </h2>
            <p className="text-indigo mb-4">{articleDetail.description}</p>
            <button
              onClick={handleEditClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetailsView;
