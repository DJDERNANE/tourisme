import './style.css'
export default function Button({ text, handleClick, login }) {
    return (
        <button type='submit' className={`border-0 px-3 py-2 rounded text-white ${login? 'login-btn' : ''}` } onClick={handleClick}>
            {text}
        </button>
    )
}