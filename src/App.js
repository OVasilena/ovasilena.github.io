import React from 'react';
import './App.css';
import MainPage from "./js/components/MainPage";
import 'bootstrap/dist/css/bootstrap.css';
import c from './styles/Base.module.css';

function App() {
  return (
    <div className={`${c.body} App h-100`}>
      <section className='container-fluid'>
          <MainPage/>
      </section>
    </div>
  );
}

export default App;
