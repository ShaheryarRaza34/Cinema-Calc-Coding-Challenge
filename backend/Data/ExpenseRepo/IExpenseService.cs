using backend.DTO;
using backend.Models;
public interface IExpenseService
{
    Task<Expense> AddExpense(Expense body);
    Task<Expense> EditExpense(int id, Expense Expense);
    Task<bool> DeleteExpense(int id);
    IEnumerable<Expense> ListExpense();
   
}