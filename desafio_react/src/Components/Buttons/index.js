import style from './style.css'

function Buttons({link_button, texto }) {
    return (
        <>
            <a href={link_button} target="_blank">
                <button>{texto}</button>
            </a>
        </>
    )
}

export default Buttons