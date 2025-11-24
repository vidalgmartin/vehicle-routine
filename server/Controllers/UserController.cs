using Microsoft.AspNetCore.Mvc;
using server.Database;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ServerDbContext _db;

    public UserController(ServerDbContext db)
    {
        _db = db;
    }
    
    [HttpGet("all")]
    public IActionResult GetUsers()
    {
        var users = _db.Users.ToList();
        return Ok(users);
    }
}