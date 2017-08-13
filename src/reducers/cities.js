import {LocalStorageAPI} from '../utils/Localstorage'

const initialState = LocalStorageAPI.all() || [];

export default function cities(state = initialState, action){
    if(action.type==='ADD_CITY'){
            return [
                ...LocalStorageAPI.all()
            ];
    }
    else if( action.type === 'DELETE_CITY'){
        let stateArray =  [...state];
        let newArray = [];
        console.log("payload:" +action.payload);
        for(let i=stateArray.length-1; i>=0; i--){
            console.log(stateArray[i]);
            if(stateArray[i]!==action.payload){
                newArray.push(stateArray[i]);
            }
        }
        console.log(newArray);
        return newArray;
    }
    return state;
}
