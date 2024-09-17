using AutoMapper;
using backend.Models;
using backend.DTO;

namespace backend.MapModel;

public class ExpenseMapper : Profile
{
    public ExpenseMapper()
    {
        
        CreateMap<Expense,ExpenseDTO>();
        CreateMap<ExpenseDTO,Expense>();
    }
}