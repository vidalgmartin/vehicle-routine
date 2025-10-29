using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("/api")]
public class TestingController : ControllerBase
{
    [HttpGet("test")]
    public IActionResult GetTest()
    {
        return Ok("Helloge world!");
    }
}