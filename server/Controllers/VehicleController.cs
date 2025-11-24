using Microsoft.AspNetCore.Mvc;
using server.Database;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VehicleController : ControllerBase
{
    // Database context
    private readonly ServerDbContext _db;

    // Constructor
    public VehicleController(ServerDbContext db)
    {
        _db = db;
    }
    
    // Get vehicles
    [HttpGet("all")]
    public IActionResult GetVehicles()
    {
        var vehicles = _db.Vehicles.ToList();
        return Ok(vehicles);
    }
}