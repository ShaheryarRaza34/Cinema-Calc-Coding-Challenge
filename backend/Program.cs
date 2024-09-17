using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data.ExpenseRepo;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Add connection string
var connectionString = builder
                        .Configuration
                        .GetConnectionString("DbConnection");

// Set the connectionString to AddDbContext
builder.Services.AddDbContext<AppDbContext>(options=>options.UseMySql(connectionString,ServerVersion.AutoDetect(connectionString)));

builder.Services.AddScoped<IExpenseService, ExpenseService>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins",
        builder =>
        {
            builder.WithOrigins("*") 
                   .AllowAnyHeader()
                   .WithMethods("GET", "POST", "PATCH", "DELETE");
        });
});


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.UseCors("AllowSpecificOrigins");


app.Run();
