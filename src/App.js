import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Pop from './components/registerModal/Pop';
// import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Pop />
      <Footer />
      {/* <RegistrationForm /> */}
    </>
  );
};

export default App;
