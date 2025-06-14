import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';

const CardItem = ({ card, onLike, onShare }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      {/* Card Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{card.description}</p>

        {/* Card Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLike(card.id)}
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Heart
                size={20}
                className={card.isLiked ? 'fill-pink-500 text-pink-500' : ''}
              />
              <span className="text-sm">{card.likes}</span>
            </button>
            <button
              onClick={() => onShare(card.id)}
              className="text-gray-600 hover:text-purple-500 transition-colors"
            >
              <Share2 size={20} />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(card.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Card Tags */}
      {card.tags && card.tags.length > 0 && (
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CardItem; 