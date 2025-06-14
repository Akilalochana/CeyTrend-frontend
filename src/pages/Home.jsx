import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Heart, Sparkles } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Gift,
      title: 'Custom Cards',
      description: 'Create personalized birthday cards with your own messages and designs.',
    },
    {
      icon: Heart,
      title: 'Heartfelt Wishes',
      description: 'Express your feelings with our collection of beautiful card templates.',
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Choose from a variety of themes and styles for every occasion.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-50" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Make Birthdays Special
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create and send beautiful, personalized birthday cards that will make your loved ones feel truly special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/create-card"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Create a Card
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/cards"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Browse Cards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Create Something Special?</h2>
            <p className="mb-8 text-pink-100">
              Start creating your personalized birthday card now and make someone's day unforgettable.
            </p>
            <Link
              to="/create-card"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 