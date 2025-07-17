import './colabs.css';

export const Colabs = ({nome, cargo, imagem}) => {
    return (
        <div className='colabs'>
            <div className='head'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='foot'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}