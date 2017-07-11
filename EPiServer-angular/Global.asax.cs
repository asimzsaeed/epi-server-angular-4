using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace EPiServer_angular
{
    public class EPiServerApplication : EPiServer.Global
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

           // GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            //Tip: Want to call the EPiServer API on startup? 
            //Add an initialization module instead (Add -> New Item.. -> EPiServer -> Initialization Module)
        }
    }
}