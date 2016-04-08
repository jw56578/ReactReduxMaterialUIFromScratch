//select book is an ActionCreator, it needs to return an action, 
//an object iwht a type property
function selectBook(book){
    return {
        type:"BOOK_SELECTED",
        payload:book
        
    }
    
}
export {selectBook};