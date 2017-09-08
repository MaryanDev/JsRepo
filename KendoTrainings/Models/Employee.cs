using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace KendoTrainings.Models
{
    [JsonObject]
    public class Employee
    {
        public string Name { get; set; }
        public int YearsEmployed { get; set; }
        public string DoB { get; set; }
        public string Department { get; set; }
    }
}