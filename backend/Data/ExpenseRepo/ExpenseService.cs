using System.Numerics;
using backend.DTO;
using backend.Models;

namespace backend.Data.ExpenseRepo;



public class ExpenseService : IExpenseService
    {
        private readonly AppDbContext _dbContext;

        // Constructor
        public ExpenseService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Add a Expense
        public async Task<Expense> AddExpense(Expense body)
        {
            if(body is not null)
            {
                // round the amount to 2 decimal places 
                body.Amount = Math.Round((decimal)body.Amount, 2);
                body.Rate = Math.Round((decimal)body.Rate, 2);
                await _dbContext.Expense.AddAsync(body);
                await _dbContext.SaveChangesAsync();
            }
            return body;
        }

       
        // Delete a Expense
     public async Task<bool> DeleteExpense(int id)
{

    var existingExpense = await _dbContext.Expense.FindAsync(id);

    if (existingExpense == null)
    {
        throw new Exception("Expense not found"); // or throw an exception if you want
    }
    
    _dbContext.Expense.Remove(existingExpense);
    await _dbContext.SaveChangesAsync();
  

    return true; // Indicating the deletion was successful
}
        
        
        public async Task<Expense> EditExpense(int id, Expense Expense)
        {
            var existingExpense = await _dbContext.Expense.FindAsync(id);
            if(existingExpense is not null)
            {
        
             if (Expense.Amount is not null){
                 existingExpense.Amount = Expense.Amount;
             }
             if (Expense.Name is not null){
                 existingExpense.Name = Expense.Name;
             }
             if (Expense.Rate is not null){
                 existingExpense.Rate = Expense.Rate;
             }
                await _dbContext.SaveChangesAsync();
            }
            return existingExpense;
        }

        // List of all Expense
        public IEnumerable<Expense> ListExpense()
        {
            return _dbContext.Expense.ToList();
        }
    }