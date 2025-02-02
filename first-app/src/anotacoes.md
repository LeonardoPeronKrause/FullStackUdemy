**APRENDENDO A TRABALHAR COM UseState**

**1**
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});



  function handleRegister(e) {
    e.preventDefault();
    
    alert('Usuário registrado com suceso!')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return(
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input
         placeholder='Digite seu nome:'
         value={nome}
         onChange={ (e) => setNome(e.target.value)}
        /><br/>

        <label>Email:</label><br/>
        <input
         placeholder='Digite seu email'
         value={email}
         onChange={ (e) => setEmail(e.target.value)}
        /><br/>

        <label>Idade:</label><br/>
        <input
         placeholder='Digite sua idade'
         value={idade}
         onChange={ (e) => setIdade(e.target.value)}
        /><br/>

        <button type='submmit'>Registrar</button>
      </form>
      <br/>
      <br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>
      </div>
    </div>
  );
}

export default App;

**2**

import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);


  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('')
  }

  return(
    <div>
      <h1>Cadastrando Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input
         placeholder='Digite uma tarefa:'
         value={input}
         onChange={ (e) => setInput(e.target.value)}
        /><br/>

        <button type='submmit'>Registrar</button>
      </form>
      <br/>
      <br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;