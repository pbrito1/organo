import Banner from './components/banner';
import Text from './components/text';

function App() {
  return (
    <div className="App">
      <Banner />
      <Text label="Nome" />
      <Text label="Cargo" />
      <Text label="Imagem" />
    </div>
  );
}

export default App;
