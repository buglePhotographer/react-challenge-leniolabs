import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Main from './Components/Main';
import DetailPage from './Components/DetailPage';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/congressmanDetail/:id" exact component={DetailPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
