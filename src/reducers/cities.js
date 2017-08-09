import {LocalStorageAPI} from '../utils/Localstorage'

const initialState = LocalStorageAPI.all() || [];

export default function cities(state = initialState, action){
    if(action.type==='ADD_CITY'){
        return [
            ...state,
            action.payload
        ];
    }
    else if( action.type === 'DELETE_CITY'){
        let stateArray =  [...state];
        let newArray = [];
        for(let i=stateArray.length-1; i>=0; i--){
            if(!stateArray[i]===action.payload){
                newArray.push(stateArray[i]);
            }
        }
        return newArray;
    }
    return state;
}
