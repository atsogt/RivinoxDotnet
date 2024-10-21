using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RovinoxDotnet.DTOs.NotificationDto
{
    public class NotificationDto
    {
        public int Id { get; set; }
        public string SenderId { get; set; }
        public string ReceiverId { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Description  { get; set; }
        public bool Seen { get; set; }
        public bool Enabled { get; set; }
    }
}