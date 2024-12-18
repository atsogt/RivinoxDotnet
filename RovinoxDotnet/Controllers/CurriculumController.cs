using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExcelDataReader;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.VisualBasic;
using RovinoxDotnet.DTOs.Curriculum;
using RovinoxDotnet.Interfaces;

namespace RovinoxDotnet.Controllers
{
    [Route("api/curriculum")]
    [ApiController]
    public class CurriculumController : ControllerBase
    {
        private readonly ICurriculumRepository _curriculumRepository;
        public CurriculumController(ICurriculumRepository curriculumRepository)
        {
            _curriculumRepository = curriculumRepository;
        }
        [HttpGet("batch/{batchId:int}")]
        public async Task<IActionResult> GetAll([FromRoute] int batchId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var curriculums = await _curriculumRepository.GetAllByBatchIdAsync(batchId);
            return Ok(curriculums);
        }
        [HttpPost]
        // [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateCurriculumDto curriculumDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var curriculum = await _curriculumRepository.CreateAsync(curriculumDto);
            return Ok(curriculum);
            // return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
        }
        [HttpPost("upload/{batchId:int}")]
        // [Authorize]
        public async Task<IActionResult> UpLoadExcelAsync([FromRoute] int batchId, [FromForm] IFormFile excelFile)
        {
            // , [FromBody] IFormFile excelFile
             Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            List<CreateCurriculumDto> ListOfCurriculum = [];


            if (excelFile != null)
            {

                var uploadsFolder = $"{Directory.GetCurrentDirectory()}\\Uploads";

                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                var filePath = Path.Combine(uploadsFolder, excelFile.FileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await excelFile.CopyToAsync(stream);
                }
                using (var stream = System.IO.File.Open(filePath, FileMode.Open, FileAccess.Read))
                {

                    using (var reader = ExcelReaderFactory.CreateReader(stream))
                    {
                        do
                        {
                             bool isHeaderSkipped = false;

                            while (reader.Read())
                            {
                                if (!isHeaderSkipped)
                                {
                                    isHeaderSkipped = true;
                                    continue;
                                }
                                CreateCurriculumDto curriculumDto = new()
                                {
                                    Title = reader.GetValue(0).ToString(),
                                    Order = Convert.ToInt32(reader.GetValue(1).ToString()),
                                    BatchId = batchId
                                };
                                ListOfCurriculum.Add(curriculumDto);                             
                            }
                        } while (reader.NextResult());


                    }
                }
              System.IO.File.Delete(filePath);

            }
            
            var curriculum = await _curriculumRepository.CreateFromExcelByBatchIdAsync(batchId, ListOfCurriculum);
            
            return Ok(curriculum);
        }
    }
}