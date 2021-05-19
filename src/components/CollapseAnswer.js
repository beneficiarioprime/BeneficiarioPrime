import React from 'react';
import style from '../styles/components/CollapseAnswer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CollapseAnswer = (props) => {
    return (
        <>
            <div className={`${style.contentCollapse}`}>
                <a className={`${style.answer}`} data-bs-toggle="collapse" href={`#${props.id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                    <span className={style.icon}><FontAwesomeIcon icon={faPlus} /></span>
                    {props.answer}
                </a>
                <div className={`${style.collapse} collapse`} id={props.id}>
                    <div className="card card-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollapseAnswer
