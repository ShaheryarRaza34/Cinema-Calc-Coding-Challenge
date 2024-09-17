using System.ComponentModel.DataAnnotations;

namespace backend.DTO;

public class ExpenseDTO
{
    // To keep it simple, we are going to use a DTO object like the base model
    // Valication attribues is useful
    
    public string? Name { get; set; }
    public decimal? Amount { get; set; }

    public decimal? Rate { get; set; }
}