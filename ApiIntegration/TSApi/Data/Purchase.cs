using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TSApi.Data
{
    [Table("purchase", Schema = "public")]
    public class Purchase
    {
        [Key]
        public int OrderID{get;set;}
        public int UserID{get;set;}
        public int MedicineID{get;set;}
        public string MedicineName{get;set;}
        public int Quantity{get;set;}
        public int OrderPrice{get;set;}
        public string OrderStatus{get;set;}
    }
}