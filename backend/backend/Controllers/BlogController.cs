using backend.contextData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BlogController : ControllerBase
{
    private readonly AppDbContext _context;

    public BlogController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetCourses()
    {
        var courses = await _context.Blogs.ToListAsync();

        return Ok(courses);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourses(int id)
    {
        var course = await _context.Blogs.Where(x => x.Id == id).SingleOrDefaultAsync();

        return Ok(course);
    }

    [HttpGet("getCount")]
    public async Task<IActionResult> GetAllTime()
    {
        var blogs = await _context.Blogs.ToListAsync();

        return Ok(blogs.Count());
    }
}
