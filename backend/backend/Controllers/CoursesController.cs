using backend.contextData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CoursesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CoursesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetCourses()
    {
        var course = await _context.Courses.ToListAsync();

        return Ok(course);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourses(int id)
    {
        var course = await _context.Courses.Where(x => x.Id  == id).SingleOrDefaultAsync();

        return Ok(course);
    }
}
