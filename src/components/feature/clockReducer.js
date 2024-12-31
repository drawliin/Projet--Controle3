
const initialState = {hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()}

const clockReducer = (state = initialState, action) => {

    switch(action.type){
        case 'INCREMENT_HOUR':
            if(state.hour >= 23 && state.minute >= 59){
                return {hour: 0, minute: 0}
            }
            if(state.hour >= 23){
                return {...state, hour: 0}
            }
            return {...state, hour: state.hour+1}
        
        case 'INCREMENT_MINUTE':
            if(state.hour >= 23 && state.minute >= 59){
                return {hour: 0, minute: 0}
            }
            if(state.minute >= 59){
                return {...state, minute: 0, hour: state.hour + 1}
            }
            return {...state, minute: state.minute + 1}

        case 'INCREMENT_SECOND':
            if(state.hour >= 23 && state.minute >= 59 && state.second >= 59){
                return {hour: 0, minute: 0, second: 0}
            }
            if(state.minute >= 59 && state.second >= 59){
                return {hour: state.hour + 1, minute: 0}
            }
            if(state.second >= 59){
                return {...state, minute: state.minute + 1 , second: 0}
            }
            return {...state, second: state.second + 1}
        
        default:
            return state;
    }

}

export default clockReducer;