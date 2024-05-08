using LibraryApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace LibraryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetBookInfo()
        {
            return Ok(_dbContext.books.ToList());
        }

        [HttpGet("{bookiD}")]
        public IActionResult GetIndividualBookDetails(int bookID)
        {
            var book=_dbContext.books.FirstOrDefaultAsync(book=>book.BookID==bookID);
            if(book==null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public IActionResult AddBookDetails([FromBody] BookDetails book)
        {
            _dbContext.books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{bookID}")]
       public IActionResult UpdateBookDetails(int bookID,[FromBody] BookDetails book)
        {
            var bookexist=_dbContext.books.FirstOrDefault(book=>book.BookID==bookID);
            if(bookexist==null)
            {
                return NotFound();
            }
            bookexist.BookID=book.BookID;
            bookexist.BookName=book.BookName;
            bookexist.AuthorName=book.AuthorName;
            bookexist.BookCount=book.BookCount;

            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{bookID}")]
        public IActionResult DeleteBook(int bookID)
        {
        var book=_dbContext.books.FirstOrDefault(book=>book.BookID==bookID);
            if(book==null)
            {
                return NotFound();
            }
            _dbContext.books.Remove(book);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}