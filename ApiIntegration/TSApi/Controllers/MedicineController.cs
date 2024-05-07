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
    public class MedicineInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public MedicineInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        // private static List<MedicineInfo> _MedicineInfo =new List<MedicineInfo>
        // {
        //     new MedicineInfo{MedicineID=1,MedicineName="Paracetomel",MedicinePrice=8,MedicineCount=10,ExpiryDate="20/10/2024"},
        //     new MedicineInfo{MedicineID=2,MedicineName="Colpal",MedicinePrice=10,MedicineCount=5,ExpiryDate="20/10/2025"},
        //     new MedicineInfo{MedicineID=3,MedicineName="Stepsil",MedicinePrice=5,MedicineCount=10,ExpiryDate="30/10/2024"}
        // };

        //Get: api/MedicineInfo
        // [HttpGet]
        // public IActionResult GetMedicineInfo()
        // {
        //     return Ok(_MedicineInfo);
        // }

        [HttpGet]
        public IActionResult GetMedicineInfo()
        {
            return Ok(_dbContext.medicines.ToList());
        }


        [HttpGet("{MedicineID}")]
        public IActionResult GetIndividualMedicineDetails(int medicineID)
        {
            var medicine=_dbContext.medicines.FirstOrDefaultAsync(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        //Get: api/MedicineInfo/1
        // [HttpGet("{id}")]
        // public IActionResult GetMedicine(int id)
        // {
        //     var medicine=_MedicineInfo.Find(m=>m.MedicineID==id);
        //     if(medicine==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(medicine);
        // }

        //Adding new medicine
        //POST: api/MedicineInfo
        // [HttpPost]
        //  public IActionResult PostMedicine([FromBody] MedicineInfo medicine)
        //  {
        //     _MedicineInfo.Add(medicine);
        //     //you might want to return CreateAtAction or another appropriate response
        //     return Ok();
        //  }

        [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] MedicineInfo medicine)
        {
            _dbContext.medicines.Add(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
         //updating an existing medicine
         //PUT: api/MedicineInfo/1
        //  [HttpPut]
        //  public IActionResult PutMedicine(int id,[FromBody] MedicineInfo medicine)
        //  {
        //     var index=_MedicineInfo.FindIndex(m=>m.MedicineID==id);
        //     if(index<0)
        //     {
        //         return NotFound();
        //     }
        //     _MedicineInfo[index]=medicine;
        //     //you might want to return nocontent or appropriate response
        //     return Ok();
        //  }

        [HttpPut("{MedicineID}")]
        public IActionResult UpdateMedicineDetails(int medicineID,[FromBody] MedicineInfo medicine)
        {
            var medicineexist=_dbContext.medicines.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicineexist==null)
            {
                return NotFound();
            }
            medicineexist.MedicineCount=medicine.MedicineCount;
            medicineexist.ExpiryDate=medicine.ExpiryDate;
            medicineexist.MedicineName=medicine.MedicineName;
            medicineexist.MedicinePrice=medicine.MedicinePrice;
            _dbContext.SaveChanges();
            return Ok();
        }

         //Deleting an Existing medicine
         //DELETE:api/MedicineInfo/1
        //  [HttpDelete("{id}")]
        //  public IActionResult DeleteMedicine(int id)
        //  {
        //     var medicine=_MedicineInfo.Find(m=>m.MedicineID==id);
        //     if(medicine==null)
        //     {
        //         return NotFound();
        //     }
        //     _MedicineInfo.Remove(medicine);
        //     return Ok();
        //  }

        [HttpDelete("{MedicineID}")]
        public IActionResult DeleteMedicine(int medicineID)
        {
        var medicine=_dbContext.medicines.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}