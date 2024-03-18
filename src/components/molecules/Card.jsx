import React from 'react';

const Card = ({ article }) => {
  return (
    

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-4 rounded-t-lg" src={article.image_url} alt="product image" />
    </a>
    <div class="px-3 pb-3">
        <a href="#">
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
            </div>
            
        </div>
        <div class="flex items-center justify-between">
            
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver detalles</a>
        </div>
    </div>
</div>

  )
}

export default Card