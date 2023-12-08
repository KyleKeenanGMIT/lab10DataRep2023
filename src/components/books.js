import BookItem from "./bookItem";

function Books(props) {

   

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook = {book} key = {book._id} reload={()=>{props.Reload();}}></BookItem>//return book item component - reload added from lab 9.
        }
    ); //map function created with arrow function
       
    
}
export default Books;