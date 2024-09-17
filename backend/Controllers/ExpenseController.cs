using AutoMapper;
using backend.Models;
using backend.Data.ExpenseRepo;
using backend.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace backend.Controllers
{
    [ApiController]
    [Route("/api/expense")]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpenseService _expenseService;
        private readonly IMapper _mapper;

        public ExpenseController(IExpenseService expenseService, IMapper mapper)
        {
            _expenseService = expenseService;
            _mapper = mapper;
        }


        [HttpGet("get-all-expenses")]
        public IActionResult Gets()
        {
            var model = _expenseService.ListExpense();
            if (model.Any())
            {

                return StatusCode(StatusCodes.Status200OK,model);
            }
            return StatusCode(StatusCodes.Status200OK, model);
        }

        // This action will return a new expense
        [HttpPost("create-expense")]
        public async Task<IActionResult> Post([FromBody] ExpenseDTO expenseDTO)
        {
            Console.WriteLine(expenseDTO.Name);
            var mapModel = _mapper.Map<Expense>(expenseDTO);
            //print map model
            Console.WriteLine(mapModel);

            var newExpense = await _expenseService.AddExpense(mapModel);
            if (newExpense is not null)
            {
                // To pass the new music that has been added, mapping model is a require section of all part of an API
                // When you want pass the result value to the client
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<Expense>(newExpense));
            }
            return StatusCode(StatusCodes.Status400BadRequest);
        }

        // This action will retrun an updated music
        [HttpPatch ("update-expense/{id}")]
        public async Task<IActionResult> Patch([FromBody] ExpenseDTO expenseDTO, [FromRoute] int id)
        {
            // Map the model to able the post request to pass a model based on the Music model
            var mapModel = _mapper.Map<Expense>(expenseDTO);
            var updatedExpense = await _expenseService.EditExpense(id, mapModel);
            if (updatedExpense is not null)
            {
                // To pass the new music that has been added, mapping model is a require section of all part of an API
                // When you want pass the result value to the client
                return StatusCode(StatusCodes.Status200OK, _mapper.Map<Expense>(updatedExpense));
            }
            return StatusCode(StatusCodes.Status400BadRequest);
        }

        // This action will remove a music
        [HttpDelete("delete-expense/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            Console.WriteLine(id);
            var deletedExpense = await _expenseService.DeleteExpense(id);
           
                return StatusCode(StatusCodes.Status200OK, deletedExpense);
           
                
            
        }
    }
}