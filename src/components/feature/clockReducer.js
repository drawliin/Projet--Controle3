
const initialState = {hour: new Date().getHours(), minute: new Date().getMinutes()}

const clockReducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT_HOUR'){
        if(state.hour === 23){
            return {...state, hour: 0}
        }
        return {...state, hour: state.hour+1}
    }
    else if(action.type==='INCREMENT_MINUTE'){
        if(state.minute === 59){
            return {...state, minute: 0, hour: state.hour + 1}
        }
        return {...state, minute: state.minute + 1}
    }
    return state

}

export default clockReducer;