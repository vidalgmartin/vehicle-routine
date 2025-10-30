using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("/api")]
public class VehicleController : ControllerBase
{
    [HttpGet("vehicle")]
    public IActionResult GetVehicle()
    {
        var car = new Vehicle
        {
            Make = "Toyota",
            Model = "Camry",
            Year = 2012
        };
        
        return Ok(car);
    }
}