
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-red-600">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🍔 Mr Yummy – <span className="text-red-600">Batna’s Flavor Hub</span> 🍟
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none leading-loose text-center md:text-left">
            <p className="mb-6 font-medium text-xl text-red-600">
              Welcome to Mr Yummy, where every bite tells a story! 
            </p>
            <p className="mb-6">
              Nestled in the heart of Batna, Mr Yummy is more than just a fast-food spot — it’s a flavor destination for burger lovers, food adventurers, and anyone craving bold, unforgettable tastes. 
            </p>
            <p className="mb-6">
              At Mr Yummy, we take classic favorites and elevate them with juicy smash burgers, crispy fries, rich sauces, and handcrafted recipes that make every meal feel like a celebration. Whether you’re grabbing a quick lunch, enjoying dinner with friends, or treating yourself after a long day, we serve up freshness, quality, and flavor with a smile.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
                <h3 className="text-xl font-black text-red-700 mb-4">✨ Why choose Mr Yummy?</h3>
                <ul className="space-y-3 font-bold text-gray-800">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">🍔</span>
                    <span>Mouth-watering burgers with signature twists</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">🌯</span>
                    <span>Flavor-packed tacos, pizzas & sides</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">🥤</span>
                    <span>Refreshing drinks to pair with every meal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">🚀</span>
                    <span>Fast service & great vibes</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
                <span className="text-4xl mb-2">📍</span>
                <p className="font-bold text-gray-800">A local favorite in Batna’s Lotissement des Moudjahidines</p>
              </div>
            </div>

            <p className="text-center font-black text-2xl text-red-600 italic mt-8">
              "Here, food isn’t just eaten — it’s experienced. Mr Yummy: Where hunger meets happiness!" 🍽️💥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
