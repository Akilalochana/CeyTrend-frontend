import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import CardItem from '../components/cards/CardItem';

const AllCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data - replace with actual API call
  const cards = [
    {
      id: 1,
      title: 'Happy Birthday!',
      description: 'A beautiful birthday card with balloons and confetti.',
      imageUrl: 'https://source.unsplash.com/random/400x300?birthday',
      likes: 42,
      isLiked: false,
      createdAt: '2024-03-15',
      tags: ['Birthday', 'Balloons', 'Confetti'],
    },
    // Add more mock cards here
  ];

  const availableTags = ['Birthday', 'Balloons', 'Confetti', 'Cake', 'Gifts', 'Family'];

  const handleLike = (cardId) => {
    // Implement like functionality
    console.log('Liked card:', cardId);
  };

  const handleShare = (cardId) => {
    // Implement share functionality
    console.log('Shared card:', cardId);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every((tag) => card.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Birthday Cards</h1>
        <p className="text-gray-600">
          Browse through our collection of beautiful birthday cards and find the perfect one for your loved ones.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <Filter size={20} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Filter Tags */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8 p-4 bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Filter by Tags</h3>
            <button
              onClick={() => setSelectedTags([])}
              className="text-sm text-purple-600 hover:text-purple-700"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors
                  ${selectedTags.includes(tag)
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                  }`}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <X size={14} className="inline-block ml-1" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onLike={handleLike}
            onShare={handleShare}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No cards found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTags([]);
            }}
            className="mt-4 text-purple-600 hover:text-purple-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCards; 