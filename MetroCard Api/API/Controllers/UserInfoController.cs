using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        // public static List<UserInfo> _UserInfo=new List<UserInfo>
        // {
        //     new UserInfo{CardNumber=1000,UserName="Ravi",Phone="9876543210",Balance=1000},
        //     new UserInfo{CardNumber=1001,UserName="Baskaran",Phone="9876543210",Balance=1500}

        // };

        //GET: api/UserInfo
        // [HttpGet]
        // public IActionResult GetPurchase()
        // {
        //     return Ok(_UserInfo);

        // }

        //GET:api/UserInfo/1000
        // [HttpGet("{id}")]
        // public IActionResult GetUser(int id)
        // {
        //     var user=_UserInfo.Find(u=>u.CardNumber==id);
        //     if(user==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(user);
        // }

        //POST: api/UserInfo
        // [HttpPost]
        //  public IActionResult PostUser([FromBody] UserInfo user)
        //  {
        //     _UserInfo.Add(user);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

         //PUT: api/UserInfo/1000
        //  [HttpPut]
        //  public IActionResult PutUser(int id,[FromBody] UserInfo user)
        //  {
        //     var index=_UserInfo.FindIndex(u=>u.CardNumber==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _UserInfo[index]=user;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

        //  [HttpPut("{id}/{amount}")]
        //  public IActionResult PutAmount(int id,int amount)
        //  {
        //     var index=_UserInfo.Find(u=>u.CardNumber==id);
        //     if(index!=null)
        //     {
        //         index.Balance=amount;
        //     }
            
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

         //DELETE:api/MedicineInfo/1
        //  [HttpDelete("{id}")]
        //  public IActionResult DeleteUser(int id)
        //  {
        //     var user=_UserInfo.Find(u=>u.CardNumber==id);
        //     if(user==null)
        //     {
        //         return NotFound();
        //     }
        //     _UserInfo.Remove(user);
        //     return Ok();
        //  }

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

       [HttpGet("{cardNumber}")]
        public IActionResult GetIndividualUserDetails(int cardNumber)
        {
            var user=_dbContext.users.FirstOrDefaultAsync(user=>user.CardNumber==cardNumber);
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

        [HttpPut("{cardNumber}")]
       public IActionResult UpdateUserDetails(int cardNumber,[FromBody] UserInfo user)
        {
            var userexist=_dbContext.users.FirstOrDefault(user=>user.CardNumber==cardNumber);
            if(userexist==null)
            {
                return NotFound();
            }
            
            userexist.CardNumber=user.CardNumber;
            userexist.UserName=user.UserName;
            userexist.Phone=user.Phone;
            userexist.Balance=user.Balance;
            _dbContext.SaveChanges();
            return Ok();
        } 

        [HttpDelete("{cardNumber}")]
        public IActionResult DeleteUser(int cardNumber)
        {
        var user=_dbContext.users.FirstOrDefault(user=>user.CardNumber==cardNumber);
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