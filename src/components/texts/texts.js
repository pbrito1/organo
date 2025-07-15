import './texts.css'

export const Texts = (props) => {

    return (
        <div className='texts'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={e => props.toChange(e.target.value)} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

