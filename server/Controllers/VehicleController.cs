using Microsoft.AspNetCore.Mvc;
using server.Database;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("/api")]
public class VehicleController : ControllerBase
{
    // Database context
    private readonly ServerDbContext _db;

    // Constructor
    public VehicleController(ServerDbContext db)
    {
        _db = db;
    }
    
    // Get testing data
    [HttpGet("vehicle")]
    public IActionResult GetVehicle()
    {
        var vehicles = _db.Vehicles.ToList();
        return Ok(vehicles);
    }
}