import './Input.css'

function Input({ placeholder, className }) {

    return (
        <input type="text" placeholder={placeholder} className={'input ' + className} />
    )
}

export default Input
