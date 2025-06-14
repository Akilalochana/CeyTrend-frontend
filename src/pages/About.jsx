import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Gift } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Personalized Wishes',
      description: 'Create heartfelt birthday messages that truly express your feelings and make your loved ones feel special.',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Designs',
      description: 'Choose from a wide range of professionally designed templates or create your own unique card design.',
    },
    {
      icon: Users,
      title: 'Easy Sharing',
      description: 'Share your birthday cards instantly with friends and family through email or social media.',
    },
    {
      icon: Gift,
      title: 'Free to Use',
      description: 'All our basic features are completely free to use, making it easy to spread joy and celebrate birthdays.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Birthday Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe that every birthday deserves to be celebrated in a special way. Our mission is to help you create
            beautiful, personalized birthday cards that bring joy to your loved ones.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Birthday Cards, we're passionate about making birthdays more meaningful. We understand that a simple
            birthday card can brighten someone's day and create lasting memories. That's why we've created a platform
            that makes it easy to create and share beautiful, personalized birthday cards.
          </p>
          <p className="text-gray-600">
            Whether you're celebrating a family member, friend, or colleague, our tools help you express your feelings
            in a unique and creative way. Join us in spreading joy and making birthdays special!
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Choose a Template</h3>
                <p className="text-gray-600">
                  Browse through our collection of beautiful card templates or start with a blank canvas.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Personalize Your Card</h3>
                <p className="text-gray-600">
                  Add your own message, images, and creative touches to make the card unique.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Send Your Wishes</h3>
                <p className="text-gray-600">
                  Share your card instantly with the birthday person through email or social media.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Create Something Special?</h2>
          <p className="text-gray-600 mb-8">
            Start creating your personalized birthday card now and make someone's day unforgettable.
          </p>
          <a
            href="/create-card"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Create Your First Card
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 