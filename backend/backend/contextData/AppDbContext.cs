using backend.models;
using Microsoft.EntityFrameworkCore;

namespace backend.contextData;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions opt) : base(opt)
    {
    }

    public DbSet<Courses> Courses { get; set; } 
    public DbSet<Blog> Blogs { get; set; }
}
