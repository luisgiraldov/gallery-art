import React from 'react';
import './App.css';
import Header from './components/header/Header';
import GalleryGrid from './components/galleryGrid/GalleryGrid';

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <Header />
        <GalleryGrid />
      </main>
    </div>
  );
}

export default App;
