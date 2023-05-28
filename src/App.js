import './App.css';
import React from 'react'
import MenuNavbar from './Pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div className="App">
   <MenuNavbar/>

      <header className="App-header">
      <h1>Encontre sua vaga de emprego</h1>
      <div class="container-fluid">
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Digite cargo cidade ou estado" aria-label="Search"></input>
      <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
Buscar</button>
      </form>
      </div>
      </header>
    </div>
  );
}

export default App;
