import React from 'react'

const Modal = (props) => {
    return (
        <>
            <div className="modal" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id}>{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Salvar mudanças</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
