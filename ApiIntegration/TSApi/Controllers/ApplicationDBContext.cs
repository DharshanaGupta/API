using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TSApi.Data;

namespace TSApi.Controllers
{
    public class ApplicationDBContext:DbContext, IDisposable
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserInfo> users{get;set;}
        public DbSet<MedicineInfo> medicines{get;set;}
        public DbSet<Purchase> orders{get;set;}
    }
}