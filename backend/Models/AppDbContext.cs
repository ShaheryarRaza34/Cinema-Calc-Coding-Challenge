using Microsoft.EntityFrameworkCore;

namespace backend.Models;


public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option) : base(option)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed Data can be executed in this method.
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Expense> Expense { get; set; }
    }