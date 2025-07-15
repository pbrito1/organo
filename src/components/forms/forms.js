import Texts from '../texts';
import Lists from '../lists';
import Buttons from '../buttons';
import './forms.css';
import { useState } from 'react';

export const Forms = (props) => {
    
    const items = [
        '',
        'Programação',
        'Design',
        'Marketing',
        'Vendas'
        ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.insertColabs({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return (
        <section className='forms'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Texts 
                    required={true} 
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome} 
                    toChange={valor => setNome(valor)}
                />
                <Texts 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo} 
                    toChange={valor => setCargo(valor)}
                />
                <Texts 
                    label="Imagem" 
                    placeholder="Digite o caminho da sua imagem" 
                    valor={imagem} 
                    toChange={valor => setImagem(valor)}
                />
                <Lists 
                    required={true} 
                    label="Times" 
                    placeholder="Selecione um time" 
                    items={items} 
                    valor={time} 
                    toChange={valor => setTime(valor)}
                />
                <Buttons>
                    Criar Card
                </Buttons>
            </form>
        </section>
    )
}