import './buttons.css';

export const Buttons = (props) => {
    return (
        <div className="buttons">
            <button>{props.children}</button>
        </div>
    )
}