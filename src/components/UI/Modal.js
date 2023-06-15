import classes from './Modal.module.css'
import ReactDOM  from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.hideCart} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )   
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <div>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart}></Backdrop>, portalElement)}
        </div>
    )
}
export default Modal