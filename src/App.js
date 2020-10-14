import React from 'react';
import Membro from "./Membro";

const employee1 = {
  nome: "Marcone Faria",
  altura: 1.80,
  idade: 20,
  cargo: "Trainee",
  curso: "Engenharia de Controle e Automação",
};

const employee2 = {
  nome: "Arthur Lima",
  altura: 1.65,
  idade: 19,
  cargo: "Gerente Scrum",
  curso: "Engenharia Elétrica",
};

function App() {
  return (
    <div>
      <h1>Membros Cadastrados:</h1>
      <Membro membro = {employee1}/>
      <Membro membro = {employee2}/>
    </div>
  );
}

export default App;
