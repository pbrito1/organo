import './texts.css'

export const Texts = (props) => {
    return (
        <div className='texts'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

