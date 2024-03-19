import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../molecules/Card';

const CategoryView = () => {
    const { categoryId } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/categories/${categoryId}/articles`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la respuesta de la API');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los artículos de la categoría:', error);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (articles.length === 0) {
        return <div>No hay artículos disponibles en esta categoría.</div>;
    }

    return (
        <div>
            <h2>Artículos en la categoría</h2>
            <div className="grid grid-cols-3 gap-4">
                {articles.map(article => (
                    <Card key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}

export default CategoryView;



