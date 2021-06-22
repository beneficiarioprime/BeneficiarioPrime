import React from 'react'

const FloatingLabels = (props) => {
    return (
        <>
            <div className="form-floating mb-3">
                <input name={props.name}  maxlength={props.maxlength} onBlur={props.onBlur} type={props.type} defaultValue={props.defaultValue} disabled={props.disabled} value={props.value}  className={`form-control ${props.className}`} id={props.id} placeholder={props.placeholder} />
                <label for={props.id}>{props.title}</label>
            </div>
        </>
    )
}

export default FloatingLabels
