using Microsoft.AspNetCore.Mvc;

namespace web_back_realtime_communication.ws.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}