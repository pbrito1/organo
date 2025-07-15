import './lists.css';

export const Lists = (props) => {
    return (
        <div className="lists">
            <label>{props.label}</label>
            <select value={props.valor} onChange={e => props.toChange(e.target.value)} required={props.required} placeholder={props.placeholder}>
                {props.items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>        
    ) 
}