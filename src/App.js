import Banner from './components/banner';
import Forms from './components/forms';
import { useState } from 'react';
import Times from './components/times';

function App() {

  const times = [
    {
      nome: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      nome: 'Dev-Ops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#FFBA29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colabs, setColabs] = useState([]);

  const insertColabs = (colab) => {
    setColabs([...colabs, colab]);
    console.log(colab);
  };

  return (
    <div className="App">
      <Banner />
      <Forms insertColabs={colab => insertColabs(colab)} />

      {times.map(time => <Times key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondaryColor={time.secondaryColor} />)}

    </div>
  );
}

export default App;
