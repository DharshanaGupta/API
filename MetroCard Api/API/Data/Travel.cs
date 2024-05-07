using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace API.Data
{
    [Table("Travel", Schema = "public")]
    public class Travel
    {
        [Key]
        public int TravelID{get;set;}
        public int CardNumber{get;set;}
        public string FromLocation{get;set;}
        public string ToLocation{get;set;}
        public int TravelCost{get;set;}
        public string Status{get;set;}
        public DateTime Date{get;set;}
    }
}