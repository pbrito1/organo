import './lists.css';

export const Lists = (props) => {
    return (
        <div className="lists">
            <label>{props.label}</label>
            <select placeholder={props.placeholder}>
                {props.items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>        
    ) 
}