import React from 'react';
import './App.css';
import PeopleList from './Components/PeopleList';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <PeopleList />
      <Footer />
    </div>
  );
}

export default App;
