import React from 'react'
import UpdateForm from '../molecules/UpdateForm'
import { useLocation } from 'react-router-dom';

const UpdateArticleView = () => {
    const location = useLocation();
    const article = location.state && location.state.article;
  
    if (!article) {
      return <div>No se proporcionó un artículo para actualizar.</div>;
    };

    return (
        <UpdateForm article={article} />
    )
}

export default UpdateArticleView