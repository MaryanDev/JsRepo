using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoTrainings.Models;
using Newtonsoft.Json;

namespace KendoTrainings.Controllers
{
    public class KendoController : Controller
    {
        // GET: Kendo
        public ActionResult Home()
        {
            return View();
        }

        public JsonResult GetAnimals()
        {
            return Json(new List<string> {"Ant", "Antilope", "Badger", "Beaver", "Bird"}, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetGridData()
        {
            var gridData = JsonConvert.DeserializeObject<List<Employee>>(System.IO.File.ReadAllText(Server.MapPath(@"/Data/gridData.json")));
            return Json(gridData, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateGrid(object data)
        {
            return null;
        }
    }
}