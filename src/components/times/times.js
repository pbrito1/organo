import Colabs from '../colabs';
import './times.css';

export const Times = (props) => {
  return (
    (props.colabs.length > 0) 
    && 
    <section className="times" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
      <div className='colabers'>
        {props.colabs.map(colab => <Colabs key={colab.nome} nome={colab.nome} cargo={colab.cargo} imagem={colab.imagem}  />)}
      </div>
    </section>
  );
}