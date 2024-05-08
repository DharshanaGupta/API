using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LibraryApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LibraryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : Controller
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUserInfo()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{userID}")]
        public IActionResult GetIndividualUserDetails(int userID)
        {
            var user=_dbContext.users.FirstOrDefaultAsync(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUserDetails([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{userID}")]
       public IActionResult UpdateUserDetails(int userID,[FromBody] UserInfo user)
        {
            var userexist=_dbContext.users.FirstOrDefault(user=>user.UserID==userID);
            if(userexist==null)
            {
                return NotFound();
            }
            userexist.UserID=user.UserID;
            userexist.UserName=user.UserName;
            userexist.Gender=user.Gender;
            userexist.Department=user.Department;
            userexist.Mobile=user.Mobile;
            userexist.WalletBalance=user.WalletBalance;
            userexist.MailID=user.MailID;
            
            _dbContext.SaveChanges();
            return Ok();
        } 
        [HttpDelete("{userID}")]
        public IActionResult DeleteUser(int userID)
        {
        var user=_dbContext.users.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(user);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}