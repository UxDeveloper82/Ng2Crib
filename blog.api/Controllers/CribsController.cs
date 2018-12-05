using System.Linq;
using blog.api.Data;
using Microsoft.AspNetCore.Mvc;

namespace blog.api.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    public class CribsController : ControllerBase 
    {
        private readonly DataContext _context;
        public CribsController (DataContext context) 
        {
            _context = context;

        }
        [HttpGet]
        public IActionResult GetCribs() 
        {
          var cribs = _context.Cribs.ToList();
          return Ok(cribs);

        }
        [HttpGet("{id}")]
        public IActionResult GetCrib(int id) 
        {
            var crib = _context.Cribs.FirstOrDefault(x => x.Id == id);
            return Ok(crib);
        }


    }
}