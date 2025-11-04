using Microsoft.EntityFrameworkCore;
using server.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Database connection
var dbConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ServerDbContext>(options =>
    options.UseMySql(dbConnectionString, ServerVersion.AutoDetect(dbConnectionString)));

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

// Add Cors
app.UseCors(policy =>
    policy.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.Run();