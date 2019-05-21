using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace gamebook_back.Models
{
    public class AdvertisementRequest
    {
        // TODO file upload

        public string AdVisibilityDuration { get; set; }
        public string PaymentCode { get; set; }
        public string Audience { get; set; }
        public string Comments { get; set; }
    }
}