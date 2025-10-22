import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, title, subtitle, price, badge }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="group relative flex flex-col h-full">
      {/* Image Container */}
      <div 
        onClick={handleClick}
        className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[1/1] cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Heart Icon */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            alert('Added to favorites!');
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition shadow-md z-10"
        >
          <Heart size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Product Info */}
      <div 
        onClick={handleClick}
        className="mt-4 flex flex-col flex-1 cursor-pointer"
      >
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.5rem] hover:text-gray-600 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 capitalize">{subtitle}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${price}</p>
        
        {badge && (
          <span className="inline-block mt-auto pt-2 bg-orange-400 text-white px-3 py-1 rounded text-xs font-medium capitalize w-fit">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
