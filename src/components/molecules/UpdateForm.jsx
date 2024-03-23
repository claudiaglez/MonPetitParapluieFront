import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateForm = ({ article }) => {
const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    description: '',
    categories_id: '' 
  });
  console.log("Estado inicial del formulario:", formData);

  // Función para cargar las categorías desde la API
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories');
      if (!response.ok) {
        throw new Error('Error al cargar las categorías');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para actualizar los estados locales cuando cambia el artículo
  useEffect(() => {
    if (article) {
        console.log("Datos del artículo:", article); 
      setFormData({
        title: article.title || '',
        image_url: article.image_url || '',
        description: article.description || '',
        categories_id: article.categories_id || '' 
      });
    }
  }, [article]);

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Cambio en el campo:", name, value); 
    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario de actualización
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/articles/${article.id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }
      alert('Et voilà! Producto actualizado correctamente');
      navigate('/articles');
    } catch (error) {
      console.error(error);
      alert('Error al actualizar el producto');
    }
  };

  // Cargar las categorías al cargar el componente
  useEffect(() => {
    fetchCategories();
  }, []);

    // Función para borrar el artículo
    const handleDelete = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/articles/${article.id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            // Si la respuesta no es exitosa, lanzar un error con el mensaje del servidor
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Error al borrar el producto');
          }
          alert('Producto borrado correctamente');
          // Redirigir al usuario a la página anterior después de borrar el artículo
         navigate('/articles');
        } catch (error) {
          console.error(error);
          alert('Error al borrar el producto');
        }
      };

  return (
    <section className="bg-indigo dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-beige-bg dark:text-white">Actualizar producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Título</label>
              <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
              <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">URL de la imagen</label>
              <input type="text" name="image_url" id="image_url" value={formData.image_url} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
              <label htmlFor="categories_id" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Categoría</label>
              <select id="categories_id" name="categories_id" value={formData.categories_id} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="">Elegir categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Descripción</label>
              <textarea name="description" id="description" value={formData.description} onChange={handleInputChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="text-white bg-pomme hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Actualizar Producto
            </button>
            <button type="button" onClick={handleDelete} className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              Borrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateForm;

