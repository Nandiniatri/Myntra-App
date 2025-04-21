const Modal = ({IsOpen}) => {

    if (!IsOpen) {
        return null;
    }

    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal;