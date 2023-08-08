import { books } from "../data";

function BookCards() {
  const changeStyle=(e)=>{
    e.target.style.background = '#1a24fb';
    e.target.style.color = "#f8f7f3"
    
   }
   const originalStyle = (e)=>{
     e.target.style.background = '#f8f7f3';
     e.target.style.color = '#1a24fb';
    
   }


  return (
    <div className="bookCards">
      <>
        {books.map((book, index) => (
          <div className="dataWrapper">
            <div key={index+1} className="booksData">
              <div className="number">{index+1}</div>
              <div className="content">
                <h3>{book.sub}</h3>
                <h1>{book.title}</h1>
                <p className="bookText">{book.text}</p>
              </div>
            </div>
            <button onMouseEnter={(e)=>{changeStyle(e)}} onMouseLeave={(e)=>{originalStyle(e)}}>
              <p>read more</p>
              <span className="material-symbols-outlined arrow">
                arrow_forward
              </span>
            </button>
          </div>
        ))}
      </>
    </div>
  );
}

export default BookCards;
