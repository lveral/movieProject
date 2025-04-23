import './Paragraph.css'

function Paragraph({ text, size }) {

    return (
        <p className={'paragraph' + ' ' + size}> {text}</p >
    )
}

export default Paragraph
