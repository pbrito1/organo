import Banner from './components/banner';
import Forms from './components/forms';
import { useState } from 'react';

function App() {

  const [colabs, setColabs] = useState([]);

  const insertColabs = (colab) => {
    setColabs([...colabs, colab]);
    console.log(colab);
  };

  return (
    <div className="App">
      <Banner />
      <Forms insertColabs={colab => insertColabs(colab)} />
    </div>
  );
}

export default App;
