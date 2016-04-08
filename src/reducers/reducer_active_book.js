//the state is is not app state, only the state relevant to this reducer
export default function reducer_active_book(state = null,action){
    
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
        
    }
    //don't care about the action
    return state;
}