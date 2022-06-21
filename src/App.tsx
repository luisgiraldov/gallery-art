import React from 'react';
import hero from './assets/mobile/image-hero.jpg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={hero} className="hero-image" alt="people looking at painting" />
      </header>
      <main className="main-content">
        <h1 className="main-title">Modern <br />Art Gallery</h1>
        <p>The arts in the collection of the Modern Art Gallery all started 
            from a spark of inspiration. Will these pieces inspire you? Visit 
            us and find out.
        </p>
        <div className="btn-container">
          <Link to="#" className="btn">our location</Link>
        </div>
      </main>
      
    </div>
  );
}

export default App;
