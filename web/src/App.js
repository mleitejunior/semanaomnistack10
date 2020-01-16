import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }
  
  return (
    <div id="app" >
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;

//Componente (função que retorna um conteúdo html, css, js para interface etc.)
//Quando repetimos código ou precisamos isolar uma parte da aplicação dentro de
//algo que não infrinja no funcionamento dos outros componentes 

//Propriedade
//Em html chamava de atributo (class="", title="" etc...)
//Informações que um componente PAI passa para o componente FILHO

//Estado
//Informação mantida pelo componente (lembrar do conceito de imutabilidade)
// { useState } , const [counter, setCounter] = useState(0)
// setCounter(counter +1)