using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TSApi.Data
{
    [Table("userInfo", Schema = "public")]

    public class UserInfo
    {
        [Key]
        public int UserID{get;set;}
        public string UserName{get;set;}
        public string Password{get;set;}
        public string Phone{get;set;}
        public double WalletBalance{get;set;}
    }
}