import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ article }) => {
  return (
    <div className="flex flex-col justify-between bg-beige-bg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-4 rounded-t-lg w-full h-60 object-cover" src={article.image_url} alt="product image" />
      <div className="px-3 pb-3">
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/article/${article.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
