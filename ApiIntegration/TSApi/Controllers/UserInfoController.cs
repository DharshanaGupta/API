using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TSApi.Data;

namespace TSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
          _dbContext=applicationDBContext;
        }
        // private static List<UserInfo> _UserInfo=new List<UserInfo>
        // {
        //     new UserInfo{UserID=1000,UserName="Dharshana",Password="1234",Phone="9876543210",WalletBalance=1000},
        //     new UserInfo{UserID=1001,UserName="Priya",Password="45678",Phone="4567234590",WalletBalance=500},
        //     new UserInfo{UserID=1002,UserName="Hari",Password="0987",Phone="9876543210",WalletBalance=200}
        // };

        // //GET: api/UserInfo
        // [HttpGet]
        // public IActionResult GetUserInfo()
        // {
        //     return Ok(_UserInfo);

        // }
        //GET:api/UserInfo/1000
        // [HttpGet("{id}")]
        // public IActionResult GetUser(int id)
        // {
        //     var user=_UserInfo.Find(u=>u.UserID==id);
        //     if(user==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(user);

        // }

       // POST: api/UserInfo
        // [HttpPost]
        //  public IActionResult PostUser([FromBody] UserInfo user)
        //  {
        //     _UserInfo.Add(user);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

         //updating an existing medicine
         //PUT: api/MedicineInfo/1
        //  [HttpPut]
        //  public IActionResult PutUser(int id, [FromBody] UserInfo user)
        //  {
        //     var index=_UserInfo.FindIndex(u=>u.UserID==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _UserInfo[index]=user;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

        //  [HttpPut]
        //  public IActionResult PutAmount(int id,int amount)
        //  {
        //     var index=_UserInfo.Find(u=>u.UserID==id);
        //     if(index!=null)
        //     {
        //         index.WalletBalance+=amount;
        //     }
            
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
         //}
         //Deleting an Existing medicine
        // DELETE:api/MedicineInfo/1
        //  [HttpDelete("{id}")]

        //  public IActionResult DeleteMedicine(int id)
        //  {
        //     var user=_UserInfo.Find(u=>u.UserID==id);
        //     if(user==null)
        //     {
        //         return NotFound();
        //     }
        //     _UserInfo.Remove(user);
        //     return Ok();
        //  }

         [HttpGet]
        public IActionResult GetUserInfo()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{UserID}")]
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

        [HttpPut("{UserID}")]
        public IActionResult UpdateUserDetails(int userID,[FromBody] UserInfo user)
        {
            var userexist=_dbContext.users.FirstOrDefault(user=>user.UserID==userID);
            if(userexist==null)
            {
                return NotFound();
            }
            userexist.UserName=user.UserName;
            userexist.Password=user.Password;
            userexist.Phone=user.Phone;
            userexist.WalletBalance=user.WalletBalance;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{USerID}")]
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