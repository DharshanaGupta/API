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
    public class TicketFairController : Controller
    {
        // public static List<TicketFair> _TicketFair=new List<TicketFair>
        // {
        //     new TicketFair{TicketID=2000,FromLocation="Airport",ToLocation="Egmore",Fair=55},
        //     new TicketFair{TicketID=2001,FromLocation="Airport",ToLocation="Koyembedu",Fair=25},
        //     new TicketFair{TicketID=2002,FromLocation="Alandur",ToLocation="Koyembedu",Fair=25},
        //     new TicketFair{TicketID=2003,FromLocation="Koyembedu",ToLocation="Egmore",Fair=32},
        //     new TicketFair{TicketID=2004,FromLocation="Vadapalani",ToLocation="Egmore",Fair=45},
        //     new TicketFair{TicketID=2005,FromLocation="Arumbakkam",ToLocation="Egmore",Fair=25},
        //     new TicketFair{TicketID=2006,FromLocation="Vadapalani",ToLocation="Koyembedu",Fair=25},
        //     new TicketFair{TicketID=2007,FromLocation="Arumbakkam",ToLocation="Koyembedu",Fair=16}

        // };

        //GET: api/TicketFair
        // [HttpGet]
        // public IActionResult GetTicketFair()
        // {
        //     return Ok(_TicketFair);

        // }

        //GET:api/TicketFair/2000
        // [HttpGet("{id}")]
        // public IActionResult GetTicketFair(int id)
        // {
        //     var ticket=_TicketFair.Find(f=>f.TicketID==id);
        //     if(ticket==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(ticket);
        // }

        //POST: api/TicketFair
        // [HttpPost]
        //  public IActionResult PostTicket([FromBody] TicketFair ticket)
        //  {
        //     _TicketFair.Add(ticket);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

         //PUT: api/TicketFair/2000
        //  [HttpPut]
        //  public IActionResult PutTicket(int id,[FromBody] TicketFair ticket)
        //  {
        //     var index=_TicketFair.FindIndex(f=>f.TicketID==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _TicketFair[index]=ticket;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

         //DELETE:api/TicketFair/2000
        //  [HttpDelete("{id}")]
        //  public IActionResult DeleteTicketFair(int id)
        //  {
        //     var ticket=_TicketFair.Find(f=>f.TicketID==id);
        //     if(ticket==null)
        //     {
        //         return NotFound();
        //     }
        //     _TicketFair.Remove(ticket);
        //     return Ok();
        //  }

        private readonly ApplicationDBContext _dbContext;
        public TicketFairController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]
        public IActionResult GetTicketInfo()
        {
            return Ok(_dbContext.tickets.ToList());
        }
        [HttpGet("{ticketID}")]
        public IActionResult GetIndividualTicketDetails(int ticketID)
        {
            var ticket=_dbContext.tickets.FirstOrDefaultAsync(ticket=>ticket.TicketID==ticketID);
            if(ticket==null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }

        [HttpPost]
        public IActionResult AddTicketDetails([FromBody] TicketFair ticket)
        {
            _dbContext.tickets.Add(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }

         [HttpPut("{ticketID}")]
       public IActionResult UpdateTicketDetails(int ticketID,[FromBody] TicketFair ticket)
        {
            var ticketexist=_dbContext.tickets.FirstOrDefault(ticket=>ticket.TicketID==ticketID);
            if(ticketexist==null)
            {
                return NotFound();
            }
            
            // userexist.CardNumber=user.CardNumber;
            // userexist.UserName=user.UserName;
            // userexist.Phone=user.Phone;
            // userexist.Balance=user.Balance;
            ticketexist.FromLocation=ticket.FromLocation;
            ticketexist.ToLocation=ticket.ToLocation;
            ticketexist.Fair=ticket.Fair;
            _dbContext.SaveChanges();
            return Ok();
        } 

        [HttpDelete("{ticketID}")]
        public IActionResult DeleteTicket(int ticketID)
        {
        var ticket=_dbContext.tickets.FirstOrDefault(ticket=>ticket.TicketID==ticketID);
            if(ticket==null)
            {
                return NotFound();
            }
            _dbContext.tickets.Remove(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}