
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY_IMAGES, FALLBACK_GALLERY, LOCATIONS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/menu');
    window.scrollTo(0, 0);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/assets/vd.mp4" type="video/mp4" />
          {/* Fallback video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-frying-burgers-on-a-hot-griddle-close-up-16347-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 z-10 red-gradient-overlay opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl mb-6">
            WELCOME TO <span className="text-yellow-400">MR YUMMY</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-10 leading-relaxed drop-shadow-md">
            Batna’s go-to spot for juicy burgers, tasty tacos, and bold flavors. 
            Fast, fresh, and full of fun in every bite! 🍔✨
          </p>
          <button 
            onClick={() => navigate('/menu')}
            className="bg-yellow-400 text-red-700 hover:bg-white hover:text-red-600 transition-all duration-300 font-bold px-10 py-4 rounded-full text-xl shadow-xl transform hover:scale-105"
          >
            DISCOVER OUR MENU
          </button>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-red-600 uppercase">Our Mouth-Watering Bites</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="flex justify-center">
            <div onClick={handleGalleryClick} className="relative w-full max-w-[900px] rounded-lg overflow-hidden cursor-pointer">
              {/* Featured first four images */}
              <div className="featured-row">
                {((GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES : FALLBACK_GALLERY).slice(0,4)).map((img, idx) => {
                  const resolved = img.startsWith('/') ? img : `/${img}`;
                  return (
                    <img key={idx} src={resolved} alt={`Featured ${idx+1}`} onError={(e) => { e.currentTarget.src = FALLBACK_GALLERY[idx] || FALLBACK_GALLERY[0]; }} />
                  )
                })}
              </div>

              <div className="collage-row scrollbar-hide">
                {((GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES : FALLBACK_GALLERY).slice(0,7)).map((img, idx) => {
                  const resolved = img.startsWith('/') ? img : `/${img}`;
                  return (
                    <img
                      key={idx}
                      src={resolved}
                      alt={`Yummy ${idx+1}`}
                      onError={(e) => { e.currentTarget.src = FALLBACK_GALLERY[idx] || FALLBACK_GALLERY[0]; }}
                    />
                  )
                })}
              </div>

              <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded text-sm">VIEW MENU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-red-600 uppercase">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit one of our two locations in Batna</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-all">
                <div className="h-64 mb-6 rounded-xl bg-gray-200 overflow-hidden relative">
                  {/* Map Mockup/Placeholder Iframe */}
                  <iframe
                    title={loc.name}
                    className="w-full h-full border-0"
                    src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${i === 0 ? "35.5492,6.1736" : "35.5562,6.1836"}`}
                    loading="lazy"
                  ></iframe>
                  {/* Note: In a real app, user would replace the key, but we'll show a button for navigation */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                    <div className="text-center">
                      <i className="fas fa-map-marker-alt text-4xl text-red-500 mb-2"></i>
                      <p className="font-bold">Google Maps Pin</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{loc.name}</h3>
                <a 
                  href={loc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-red-600 font-bold hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
