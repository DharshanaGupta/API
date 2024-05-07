using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;
namespace API.Data
{
    [Table("Ticket", Schema = "public")]
    public class TicketFair
    {
        [Key]
        public int TicketID{get;set;}
        public string FromLocation{get;set;}
        public string ToLocation{get;set;}
        public int Fair{get;set;}
    }
}