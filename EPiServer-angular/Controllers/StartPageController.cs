using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using EPiServer_angular.Models.Pages;

namespace EPiServer_angular.Controllers
{
    public class StartPageController : PageController<StartPage>
    {
        public ActionResult Index(StartPage currentPage)
        {

            return View(currentPage);
        }
    }
}