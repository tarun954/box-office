import {useReducer,useEffect} from 'react';

function showsReducer(prevState,action) {

    switch(action.type){
        case 'ADD' : {
            return [...prevState,action.should];
        }
        case 'REMOVE' : {
            return prevState.filter(should => should !== action.should);
        }
        default:
            return prevState;

    }
}

function usePersistedRedcuer( reducer,intialstate,key) {
    const [state,dispatch] = useReducer(reducer,intialstate, (initial) => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.purse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(state));
    }, [state,key]);

    return[state,dispatch]
}

export function useShows(key = 'shows'){

    return usePersistedRedcuer(showsReducer,[],key);
}