import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-poppins text-textGray overflow-hidden">
      <img
        src="/decorative-swirl.svg"
        alt="Decorative background swirl"
        className="absolute top-0 right-0 w-[800px] h-[800px] object-contain opacity-70 -z-10"
      />
      <img
        src="/decorative-dots.svg"
        alt="Decorative dots"
        className="absolute top-[20%] left-0 w-32 h-32 object-contain opacity-50 -z-10"
      />

      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;