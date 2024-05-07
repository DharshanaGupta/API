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
    public class TravelController : Controller
    {
        // public static List<Travel> _Travel=new List<Travel>
        // {
        //     new Travel{TravelID=3000,CardNumber=1000,FromLocation="Airport",ToLocation="Egmore",TravelCost=55,Status="Booked",Date="20/04/2024"}
        // };

        //GET: api/Travel
        // [HttpGet]
        // public IActionResult GetTravel()
        // {
        //     return Ok(_Travel);

        // }

        //GET:api/Travel/1000
        // [HttpGet("{id}")]
        // public IActionResult GetTravel(int id)
        // {
        //     var travel=_Travel.Find(t=>t.TravelID==id);
        //     if(travel==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(travel);
        // }
        //POST: api/Travel
        // [HttpPost]
        //  public IActionResult PostTravel([FromBody] Travel travel)
        //  {
        //     _Travel.Add(travel);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

         //PUT: api/Travel/2000
        //  [HttpPut]
        //  public IActionResult PutTravel(int id,[FromBody] Travel travel)
        //  {
        //     var index=_Travel.FindIndex(t=>t.TravelID==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _Travel[index]=travel;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

         //DELETE:api/Travel/1
        //  [HttpDelete("{id}")]
        //  public IActionResult DeleteTravel(int id)
        //  {
        //     var travel=_Travel.Find(t=>t.TravelID==id);
        //     if(travel==null)
        //     {
        //         return NotFound();
        //     }
        //     _Travel.Remove(travel);
        //     return Ok();
        //  }


        private readonly ApplicationDBContext _dbContext;
        public TravelController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]
        public IActionResult GetUserInfo()
        {
            return Ok(_dbContext.travels.ToList());
        }
        [HttpGet("{travelID}")]
        public IActionResult GetIndividualTravelDetails(int travelID)
        {
            var travel=_dbContext.travels.FirstOrDefaultAsync(travel=>travel.TravelID==travelID);
            if(travel==null)
            {
                return NotFound();
            }
            return Ok(travel);
        }

        [HttpPost]
        public IActionResult AddTravelDetails([FromBody] Travel travel)
        {
            _dbContext.travels.Add(travel);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{travelID}")]
       public IActionResult UpdateTravelDetails(int travelID,[FromBody] Travel travel)
        {
            var travelexist=_dbContext.travels.FirstOrDefault(travel=>travel.TravelID==travelID);
            if(travelexist==null)
            {
                return NotFound();
            }
            
            // userexist.CardNumber=user.CardNumber;
            // userexist.UserName=user.UserName;
            // userexist.Phone=user.Phone;
            // userexist.Balance=user.Balance;
            travelexist.CardNumber=travel.CardNumber;
            travelexist.FromLocation=travel.FromLocation;
            travelexist.ToLocation=travel.ToLocation;
            travelexist.TravelCost=travel.TravelCost;
            travelexist.Status=travel.Status;
            travelexist.Date=travel.Date;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{travelID}")]
        public IActionResult DeleteTravel(int travelID)
        {
        var travel=_dbContext.travels.FirstOrDefault(travel=>travel.TravelID==travelID);
            if(travel==null)
            {
                return NotFound();
            }
            _dbContext.travels.Remove(travel);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}