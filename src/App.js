// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Home';
import { Header } from './components';
import Contato from './Contato'; 
import PrincipaisAutores from './PrincipaisAutores';
import Editoras from './Editoras';
import Sobre from './Sobre';
import CadastrarLivro from './Admin/CadastrarLivro'; 
import ConsultarLivro from './Admin/ConsultarLivro'; 
import Login from './Login'; // Importando a página de Login

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contato" element={<Contato />} /> 
        <Route path="/principaisautores" element={<PrincipaisAutores />} />
        <Route path="/editoras" element={<Editoras />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastrarlivro" element={<CadastrarLivro />} />
        <Route path="/consultarlivro" element={<ConsultarLivro />} />
        <Route path="/login" element={<Login />} /> {/* Nova rota para Login */}
      </Routes>
    </>
  );
}

export default App;
