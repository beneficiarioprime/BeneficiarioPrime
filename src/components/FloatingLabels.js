import React from 'react'

const FloatingLabels = (props) => {
    return (
        <>
            <div className="form-floating mb-3">
                <input name={props.name} type={props.type} defaultValue={props.defaultValue} disabled={props.disabled} value={props.value}  className={`form-control ${props.className}`} id="floatingInput" placeholder={props.placeholder} />
                <label for="floatingInput">{props.title}</label>
            </div>
        </>
    )
}

export default FloatingLabels
