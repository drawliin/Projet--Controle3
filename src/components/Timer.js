import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment_hour } from './actions/actions';
import { increment_minute } from './actions/actions';
import './styles/timer.css'

function Timer() {

    const {hour, minute} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            dispatch(increment_minute());
        }, 60000)

        return () => {
            clearInterval(timerInterval)
        }
    }, [dispatch])


    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{hour.toString().padStart(2,'0')}</span> : <span>{minute.toString().padStart(2,'0')}</span>
            </div>
            <div className='buttons'>
                <button onClick={() => dispatch(increment_hour())}>Add Hours</button>
                <button onClick={() => dispatch(increment_minute())}>Add Minutes</button>
            </div>
        </div>
    )
}

export default Timer