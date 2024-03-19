import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    description: '',
    categories_id: ''
    
  });

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

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para enviar el nuevo producto a la API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Error al añadir el producto');
      }
      // Limpiar el formulario después de añadir el producto
      setFormData({
        title: '',
        image_url: '',
        description: '',
        categories_id: ''
      });
      alert('Et voilà! Producto añadido correctamente');
    } catch (error) {
      console.error(error);
      alert('Error al añadir el producto');
    }
  };

  // Cargar las categorías al cargar el componente
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="bg-indigo">
    <Link to="/" className="fixed top-6 left-6 z-10">
        <svg className="w-8 h-8 ml-4 text-beige-bg dark:text-beige-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>
      </Link>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl text-beige-bg dark:text-white">Añadir nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Nombre Producto</label>
              <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Añade el nombre de tu producto" required="" />
            </div>
            <div className="w-full">
              <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">URL Imagen</label>
              <input type="text" name="image_url" id="image_url" value={formData.image_url} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="URL de la imagen" required="" />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Categoría</label>
              <select id="categories_id" name="categories_id" value={formData.categories_id} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="">Elegir categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-beige-bg dark:text-white">Descripción</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Añade tu descripción"></textarea>
            </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-beige-bg bg-pomme rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Añadir Producto
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddForm;

