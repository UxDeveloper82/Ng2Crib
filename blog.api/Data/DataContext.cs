using blog.api.Models;
using Microsoft.EntityFrameworkCore;

namespace blog.api.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<Value> Values { get; set; }

        public DbSet<Crib> Cribs { get; set; }
    }
}