// write the book component code here
function BookCards({book}){
    return (
        <div>
            <img style={{width: "200px"}} src={book.image} alt="" />
            <h2>Name: {book.name}</h2>
            <p>Genre: {book.genre}</p>
            <p>Author: {book.author}</p>
        </div>
    );
}



export default BookCards;