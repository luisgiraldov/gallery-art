import React from 'react';
import './App.css';
import Header from './components/header/Header';
import GalleryGrid from './components/galleryGrid/GalleryGrid';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <Header />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
