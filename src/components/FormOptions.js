import styles from '../styles/Home.module.css'

const FormOptions = props => {
    return (
        <div className={`form-floating mb-2 ${styles.formOptions} ${props.className}`}>
            <input autoComplete="off" autoCapitalize="none" list={props.list} type="text" className={`form-control`}
                placeholder={props.placeholder}
                id={props.for} />
            <label
                htmlFor={props.for}
            >{props.children}</label>
        </div>
    )
}

export default FormOptions;
