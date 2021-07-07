import React from 'react'
import InputMask from 'react-input-mask';

const FloatingLabelsMask = (props) => {
    return (
        <>
            <div className="form-floating mb-3">

                <InputMask mask={props.mask} id={props.id} type={props.type} defaultValue={props.defaultValue} value={props.value} disabled={props.disabled} className={`form-control ${props.className}`} placeholder={props.placeholder} {...props.register} name={props.name} onBlur={props.onBlur} maskChar={null} alwaysShowMask={false} value={props.value} onChange={props.onChange} />
                <label for={props.id}>{props.title}</label>
            </div>
        </>
    )
}

export default FloatingLabelsMask
