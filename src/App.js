import React from 'react';
import Membro from "./Membro";
import Title from "./Title";

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
      <Title  title="Membros Cadastrados:" subtitle="Veja os membros cadastrados">
        <Membro membro = {employee1}/>
        <Membro membro = {employee2}/>
      </Title>
    </div>
  );
}

export default App;
