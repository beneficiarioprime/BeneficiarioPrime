import React from 'react'
import style from '../styles/components/LoginModal.module.css'

const LoginModal = ({ id = "modal", onClose = () => { }, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <>
            <div id={id} className={`${style.modal}`}>
                <div className={`${style.container}`}>
                    <button className={`${style.buttonClose}`} onClick={onClose} />
                    <div className={`${style.content}`}>
                        Criando conteúdo
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal
