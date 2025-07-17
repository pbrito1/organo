import Colabs from '../colabs';
import './times.css';

export const Times = (props) => {
  return (
    <section className="times" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
      <Colabs />
    </section>
  );
}