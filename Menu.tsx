
import React from 'react';
import { MENU_DATA, OFFERS, WHATSAPP_LINK } from '../constants';

const Menu: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOrder = (itemName: string) => {
    const message = encodeURIComponent(`Hello Mr Yummy! I would like to order: ${itemName}`);
    window.open(`${WHATSAPP_LINK}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Category Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white border-b shadow-sm overflow-x-auto whitespace-nowrap py-4 px-4 scrollbar-hide">
        <div className="flex space-x-2 max-w-7xl mx-auto">
          {MENU_DATA.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white text-gray-800 font-bold text-sm transition-all border border-gray-200"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h1 className="text-5xl font-black text-center text-red-600 mb-16 uppercase tracking-tight">Our Full <span className="text-yellow-400">Menu</span></h1>

        {/* Menu Sections */}
        {MENU_DATA.map((section) => (
          <section id={section.id} key={section.id} className="mb-20 scroll-mt-32">
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl font-black text-gray-900">{section.title}</h2>
              <div className="flex-1 h-px bg-yellow-400"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-red-600 group-hover:text-red-700 transition-colors">{item.name}</h3>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-black text-sm">{item.price} DA</span>
                    </div>
                    {item.description && (
                      <p className="text-gray-500 text-sm mb-4 italic leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={() => handleOrder(item.name)}
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95"
                  >
                    <i className="fab fa-whatsapp"></i>
                    <span>ORDER NOW</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Offers Section */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-red-600 uppercase">OUR SPECIAL OFFERS</h2>
            <p className="text-gray-600 mt-2">More flavor, less price</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {OFFERS.map((offer, idx) => (
              <div key={idx} className="bg-red-600 text-white rounded-3xl p-8 flex items-center space-x-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                  <i className={`fas ${offer.icon} text-3xl text-yellow-400`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-1">{offer.title}</h3>
                  <p className="text-red-50 opacity-90">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
