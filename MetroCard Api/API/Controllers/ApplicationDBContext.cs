using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Data;
namespace API.Controllers
{
    public class ApplicationDBContext:DbContext,IDisposable
    {

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserInfo> users{get;set;}
        public DbSet<TicketFair> tickets{get;set;}
        public DbSet<Travel> travels{get;set;}

    }
}