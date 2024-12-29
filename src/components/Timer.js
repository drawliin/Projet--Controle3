import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment_hour } from './actions/actions';
import { increment_minute } from './actions/actions';
import './styles/timer.css'

function Timer() {

    const data = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{data.hour.toString().padStart(2,'0')}</span> : <span>{data.minute.toString().padStart(2,'0')}</span>
            </div>
            <div className='buttons'>
                <button onClick={() => dispatch(increment_hour())}>Add Hours</button>
                <button onClick={() => dispatch(increment_minute())}>Add Minutes</button>
            </div>
        </div>
    )
}

export default Timer