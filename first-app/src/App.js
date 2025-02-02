import Nome from './components/Nome'

function App() {
  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno='Leonardo' idade={30}/>
      <br></br>
      <Nome aluno='Elisa' idade={22}/>
    </div>
  );
}

export default App;