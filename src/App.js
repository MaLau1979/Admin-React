import React from 'react';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import DatabaseCards from './components/DatabaseCards';
import Footer from './components/Footer';
import Table from './components/Table';


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
              < DatabaseCards />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              < Table />
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
