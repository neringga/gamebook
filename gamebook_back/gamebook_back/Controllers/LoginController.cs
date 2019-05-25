using gamebook_back.Handlers;
using gamebook_back.Models;
using System.Web.Mvc;

namespace gamebook_back.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILoginHandler _loginHandler;

        public LoginController(ILoginHandler loginHandler)
        {
            _loginHandler = loginHandler;
        }

        // GET api/login
        public bool Get(string user, string password)
        {
            var userData = new User();
            userData.Username = user;
            userData.Password = password;
            return _loginHandler.IsRegisteredUser(userData);
        }
    }
}