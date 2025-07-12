import './text.css'

export const Text = (props) => {
    return (
        <div className='text'>
            <label>{props.label}</label>
            <input placeholder={`Digite seu ${props.label.toLowerCase()}`} />
        </div>
    )
}

