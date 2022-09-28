import React from 'react'
import SignUpInfo from './components/SignUpInfo/SignUpInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App(props) {
  return (
    <div>
      <Header />
      <SignUpInfo state={props.state} />
      <PersonalInfo state={props.state} />
      <Footer />
    </div>
  );
}

export default App;
