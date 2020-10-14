import React, {useState} from 'react';
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
  const [membro, setMembro] = useState({});

  function handleInputChange(e){
    const key = e.target.name;
    const newMembro = { ...membro };
    newMembro[key] = e.target.value;

    setMembro(newMembro);
  }

  return (
    <div>
      <Title  title="Membros Cadastrados:" subtitle="Veja os membros cadastrados">
        <Membro membro = {employee1}/>
        <Membro membro = {employee2}/>
      </Title>

      <h1>Novo membro:</h1>
        <input type="text" placeholder="Digite seu nome:" onChange={handleInputChange}/>
        
        <br/>
        
        <input type="radio" id="GP" name="cargo" value="Gerente de Produtos" onChange={handleInputChange}/>
        <label htmlFor="GP">Gerente de Produtos</label>
        
        <br/>
        
        <input type="radio" id="GS" name="cargo" value="Gerente Scrum" onChange={handleInputChange}/>
        <label htmlFor="GS">Gerente Scrum</label>

        <br/>
        <br/>

        <p>Nome do Membro: {membro.nome}</p>
        <p>Cargo selecionado: {membro.cargo}</p>
    </div>
  );
}

export default App;
