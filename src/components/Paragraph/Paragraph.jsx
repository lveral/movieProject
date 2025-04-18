import './Paragraph.css'

function Paragraph(props) {

    return (
        <p className={'paragraph' + ' ' + props.size}> {props.text}</p >
    )
}

export default Paragraph
