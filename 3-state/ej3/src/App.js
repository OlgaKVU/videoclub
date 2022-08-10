import './App.css';
import casas from './casas';
import Casa from './Casa';

//Import components

function App() {
  return (
    <>
    {casas.map((datosCasa,index)=>{
      return <Casa key={index} datos={datosCasa}/>
    })}
    </>
   
  )
}

export default App;
