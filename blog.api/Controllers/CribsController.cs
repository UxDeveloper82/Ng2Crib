using System.Linq;
using blog.api.Data;
using blog.api.Models;
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
        // GET /api/cribs
        [HttpGet]
        public IActionResult GetCribs() 
        {
          var cribs = _context.Cribs.ToList();
          return Ok(cribs);

        }
        // Get /api/cribs/1
        [HttpGet("{id}")]
        public IActionResult GetCrib(int id) 
        {
            var crib = _context.Cribs.FirstOrDefault(x => x.Id == id);
            return Ok(crib);
        }
        
        //POST /api/cribs
        [HttpPost]
        public IActionResult CreateCrib([FromBody]Crib crib)
        {
            if(!ModelState.IsValid)
              return BadRequest(ModelState);
            _context.Cribs.Add(crib);
            _context.SaveChanges();
           return CreatedAtAction("GetCribs", new { id = crib.Id}, crib);
        }

         //PUT /api/cribs
        [HttpPut("{id}")]
        public IActionResult UpdateCrib(int id, 
          [FromBody]Crib crib)
        {
            if(!ModelState.IsValid)
              return BadRequest(ModelState);
              
            _context.Cribs.Find();
            _context.SaveChanges();
           return Ok();
        
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCrib(int id)
        {
           var crib = _context.Cribs.Find(id);
           _context.Remove(crib);
           _context.SaveChanges();

           return Ok(id);

        }
    }
}