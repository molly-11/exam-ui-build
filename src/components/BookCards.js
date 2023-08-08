import {books} from "../data";

function BookCards() {
  return (
    <div className="bookCards">
      {books.map((book, index) => (
        <div key= {index}>
          <div >{index}</div>
          <div className="content">
            <h3>{book.sub}</h3>
            <h1>{book.title}</h1>
            <p>{book.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCards;
