using LibraryApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowDetailsController : Controller
    {
        private readonly ApplicationDBContext _dbContext;
        public BorrowDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetBorrowInfo()
        {
            return Ok(_dbContext.borrows.ToList());
        }

        [HttpGet("{borrowID}")]
        public IActionResult GetIndividualBorrowDetails(int borrowID)
        {
            var borrow=_dbContext.borrows.FirstOrDefaultAsync(borrow=>borrow.BorrowID==borrowID);
            if(borrow==null)
            {
                return NotFound();
            }
            return Ok(borrow);
        }

        [HttpPost]
        public IActionResult AddBorrowDetails([FromBody] BorrowDetails borrow)
        {
            _dbContext.borrows.Add(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{borrowID}")]
       public IActionResult UpdateBorrowDetails(int borrowID,[FromBody] BorrowDetails borrow)
        {
            var borrowexist=_dbContext.borrows.FirstOrDefault(borrow=>borrow.BorrowID==borrowID);
            if(borrowexist==null)
            {
                return NotFound();
            }
            borrowexist.BorrowID=borrow.BorrowID;
            borrowexist.BookID=borrow.BookID;
            borrowexist.UserID=borrow.UserID;
            borrowexist.BorrowedDate=borrow.BorrowedDate;
            borrowexist.Status=borrow.Status;
            borrowexist.PaidFineAmount=borrow.PaidFineAmount;
            borrowexist.BorrowBookCount=borrow.BorrowBookCount;
            
            _dbContext.SaveChanges();
            return Ok();
        } 
        [HttpDelete("{borrowID}")]
        public IActionResult DeleteBorrow(int borrowID)
        {
        var borrow=_dbContext.borrows.FirstOrDefault(borrow=>borrow.BorrowID==borrowID);
            if(borrow==null)
            {
                return NotFound();
            }
            _dbContext.borrows.Remove(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}