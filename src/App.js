import React from 'react';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import QuantityCards from './components/QuantityCards';
import DatabaseCards from './components/DatabaseCards';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-1">
          < SideBar /> 
        </aside>
        <main className="col-11">
          <div className="row">
            <header className="col-12">
              < TopBar />
            </header>
          </div>
          <div className="row">
            <div className="col-12">
            < QuantityCards />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              < DatabaseCards />
            </div>
          </div>
          <div className="row">
            <footer className="col-12">
              < Footer />
            </footer>
          </div>
        </main> 
      </div>
    </div>
  );
}

export default App;
