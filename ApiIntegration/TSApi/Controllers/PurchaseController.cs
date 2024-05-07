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
    public class PurchaseController : Controller
    {
        private readonly ApplicationDBContext _dbContext;
        public PurchaseController(ApplicationDBContext applicationDBContext)
        {
          _dbContext=applicationDBContext;
        }

        // public static List<Purchase> _Purchase=new List<Purchase>
        // {
        //     new Purchase{OrderID=2000,UserID=1000,MedicineID=1,MedicineName="Paracetomel",Quantity=2,OrderPrice=16,OrderStatus="Ordered"},
        //     new Purchase{OrderID=2001,UserID=1001,MedicineID=2,MedicineName="Colpal",Quantity=2,OrderPrice=20,OrderStatus="Ordered"},
        //      new Purchase{OrderID=2003,UserID=1001,MedicineID=1,MedicineName="Stepsil",Quantity=1,OrderPrice=5,OrderStatus="Ordered"}


        // };

       // GET: api/Purchase
        // [HttpGet]
        // public IActionResult GetPurchase()
        // {
        //     return Ok(_Purchase);

        // }
        //GET:api/Purchase/2000
        // [HttpGet("{id}")]
        // public IActionResult GetOrder(int id)
        // {
        //     var purchase=_Purchase.Find(o=>o.OrderID==id);
        //     if(purchase==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(purchase);

        // }

        // //POST: api/Purchase
        // [HttpPost]
        //  public IActionResult PostOrder([FromBody] Purchase purchase)
        //  {
        //     _Purchase.Add(purchase);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

         //PUT: api/Purchase/1
        //  [HttpPut]
        //  public IActionResult PutOrder(int id,[FromBody] Purchase purchase)
        //  {
        //     var index=_Purchase.FindIndex(o=>o.OrderID==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _Purchase[index]=purchase;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

          //DELETE:api/MedicineInfo/1
        //  [HttpDelete("{id}")]

        //  public IActionResult DeleteOrder(int id)
        //  {
        //     var purchase=_Purchase.Find(o=>o.OrderID==id);
        //     if(purchase==null)
        //     {
        //         return NotFound();
        //     }
        //     _Purchase.Remove(purchase);
        //     return Ok();
        //  }

        [HttpGet]
        public IActionResult GetPurchaseInfo()
        {
            return Ok(_dbContext.orders.ToList());
        }

        [HttpGet("{OrderID}")]
        public IActionResult GetIndividualPurchaseDetails(int orderID)
        {
            var purchase=_dbContext.orders.FirstOrDefaultAsync(purchase=>purchase.OrderID==orderID);
            if(purchase==null)
            {
                return NotFound();
            }
            return Ok(purchase);
        }

        [HttpPost]
        public IActionResult AddPurchaseDetails([FromBody] Purchase purchase)
        {
            _dbContext.orders.Add(purchase);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{OrderID}")]
        public IActionResult UpdatePurchaseDetails(int orderID,[FromBody] Purchase purchase)
        {
            var purchaseexist=_dbContext.orders.FirstOrDefault(purchase=>purchase.OrderID==orderID);
            if(purchaseexist==null)
            {
                return NotFound();
            }
            purchaseexist.Quantity=purchase.Quantity;
            purchaseexist.OrderPrice=purchase.OrderPrice;
            purchaseexist.OrderStatus=purchase.OrderStatus;
            purchaseexist.UserID=purchase.UserID;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{OrderID}")]
        public IActionResult DeletePurchase(int orderID)
        {
        var purchase=_dbContext.orders.FirstOrDefault(purchase=>purchase.OrderID==orderID);
            if(purchase==null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(purchase);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}