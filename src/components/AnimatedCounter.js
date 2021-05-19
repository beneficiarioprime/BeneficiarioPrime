import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import style from '../styles/components/AnimatedCounter.module.css';

const AnimatedCounter = (props) => {

    let [count, setCount] = useState(0);

    useEffect(() => {
        counter(0, props.number)
    }, [])

    const counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                setCount(count)
            }, 1000)
        }
    }

    return (
        <>
            <div className={`${style.contentCounter}`}>
                <div className={`${style.counter}`}>
                    <div>
                        <div className={`${style.icon}`}>
                            <FontAwesomeIcon icon={props.icon} />
                        </div>
                    </div>
                    <p className={`${style.count}`}>{count}</p>
                    <p className={`${style.name}`}>{props.name}</p>
                </div>
            </div>
        </>
    )
}

export default AnimatedCounter
