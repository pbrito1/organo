import Texts from '../texts';
import Lists from '../lists';
import './forms.css';

export const Forms = () => {
    
    const items = [
        'Programação',
        'Design',
        'Marketing',
        'Vendas'
        ];
    
    return (
        <section className='forms'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Texts label="Nome" placeholder="Digite seu nome" />
                <Texts label="Cargo" placeholder="Digite seu cargo" />
                <Texts label="Imagem" placeholder="Digite o caminho da sua imagem" />
                <Lists label="Times" placeholder="Selecione um time" items={items} />
            </form>
        </section>
    )
}