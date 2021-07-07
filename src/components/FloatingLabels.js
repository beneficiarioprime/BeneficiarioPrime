import React from 'react'

const FloatingLabels = (props) => {
    const {showHelpText = false, helpText = ""} = props
    return (
        <>
            <div className="form-floating mb-3">
                <input {...props.register} name={props.name} maxLength={props.maxlength} onBlur={props.onBlur} type={props.type} defaultValue={props.defaultValue} disabled={props.disabled} value={props.value} className={`form-control ${props.className}`} id={props.id} placeholder={props.placeholder} />
                <label htmlFor={props.id}>{props.title}</label>
                {showHelpText ? (
                    <>
                        <div id={props.id} className="form-text">{helpText}</div>
                    </>
                ) : <></>}
            </div>
        </>
    )
}

export default FloatingLabels
