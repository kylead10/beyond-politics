import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Pop from './components/registerModal/Pop';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <div>
        <Pop />
      </div>
      <Footer />
    </>
  );
};

export default App;
